import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Router, type IRouter } from "express";
import { DownloadCatalogueBody } from "@workspace/api-zod";

const router: IRouter = Router();
const brochurePath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "assets",
  "scanflo-brochure.pdf",
);

router.post("/catalogue", async (req, res): Promise<void> => {
  const parsed = DownloadCatalogueBody.safeParse(req.body);

  if (!parsed.success) {
    req.log.warn(
      {
        issues: parsed.error.issues.map(({ code, path: issuePath }) => ({
          code,
          path: issuePath,
        })),
      },
      "Invalid catalogue request",
    );
    res.status(400).json({
      error: "Please complete all required fields with valid details.",
    });
    return;
  }

  try {
    const brochure = await readFile(brochurePath);

    req.log.info(
      { productInterest: parsed.data.productInterest },
      "Catalogue request validated",
    );
    res
      .status(200)
      .set({
        "Cache-Control": "private, no-store",
        "Content-Disposition":
          'attachment; filename="Scanflo_Brochure.pdf"',
        "Content-Length": brochure.byteLength.toString(),
        "Content-Type": "application/pdf",
      })
      .send(brochure);
  } catch (error) {
    req.log.error({ err: error }, "Unable to serve Scanflo catalogue");
    res.status(500).json({
      error: "The catalogue is temporarily unavailable. Please try again.",
    });
  }
});

export default router;