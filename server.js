
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const siteDir = path.resolve(
  __dirname,
  "artifacts",
  "scanflo-website",
  "dist"
);

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
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8"
};

const server = http.createServer((req, res) => {
  let pathname;

  try {
    pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname
    );
  } catch {
    res.writeHead(400);
    return res.end("Bad request");
  }

  const requestedPath = path.resolve(
    siteDir,
    "." + pathname
  );

  if (
    requestedPath !== siteDir &&
    !requestedPath.startsWith(siteDir + path.sep)
  ) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  function sendFile(filePath) {
    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        return sendNotFoundOrAppPage();
      }

      res.writeHead(200, {
        "Content-Type":
          mimeTypes[path.extname(filePath).toLowerCase()] ||
          "application/octet-stream"
      });

      fs.createReadStream(filePath).pipe(res);
    });
  }

  function sendNotFoundOrAppPage() {
    // Return the SPA entry point for page routes.
    // Missing asset files should remain 404s.
    if (path.extname(pathname)) {
      res.writeHead(404);
      return res.end("Not found");
    }

    sendFile(path.join(siteDir, "index.html"));
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { Allow: "GET, HEAD" });
    return res.end("Method not allowed");
  }

  fs.stat(requestedPath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      return sendFile(path.join(requestedPath, "index.html"));
    }

    sendFile(requestedPath);
  });
});

const port = Number(process.env.PORT) || 3000;

server.listen(port, "0.0.0.0", () => {
  console.log(`Scanflo website listening on port ${port}`);
});
