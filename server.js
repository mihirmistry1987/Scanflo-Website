
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const siteDir = path.join(
  __dirname,
  "artifacts",
  "scanflo-website",
  "dist"
);

const indexFile = path.join(siteDir, "index.html");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf"
};

const server = http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { Allow: "GET, HEAD" });
    return res.end("Method not allowed");
  }

  let pathname;

  try {
    pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname
    );
  } catch {
    res.writeHead(400);
    return res.end("Bad request");
  }

  if (!fs.existsSync(indexFile)) {
    console.error("Website build missing:", indexFile);
    res.writeHead(503, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("Website build is missing. Check the deployment build logs.");
  }

  const requestedFile = path.resolve(siteDir, "." + pathname);

  if (
    requestedFile !== siteDir &&
    !requestedFile.startsWith(siteDir + path.sep)
  ) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.stat(requestedFile, (err, stats) => {
    let file = requestedFile;

    if (!err && stats.isDirectory()) {
      file = path.join(requestedFile, "index.html");
    } else if (err || !stats.isFile()) {
      if (path.extname(pathname)) {
        res.writeHead(404);
        return res.end("Not found");
      }

      // Support client-side routes in the React application.
      file = indexFile;
    }

    fs.stat(file, (fileErr, fileStats) => {
      if (fileErr || !fileStats.isFile()) {
        res.writeHead(404);
        return res.end("File not found");
      }

      res.writeHead(200, {
        "Content-Type":
          mimeTypes[path.extname(file).toLowerCase()] ||
          "application/octet-stream"
      });

      if (req.method === "HEAD") {
        return res.end();
      }

      fs.createReadStream(file)
        .on("error", () => {
          if (!res.headersSent) res.writeHead(500);
          res.end();
        })
        .pipe(res);
    });
  });
});

const port = Number(process.env.PORT) || 3000;

server.listen(port, "0.0.0.0", () => {
  console.log(`Scanflo website listening on port ${port}`);
  console.log(`Serving website files from ${siteDir}`);
});
