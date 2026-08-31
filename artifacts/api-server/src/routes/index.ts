import { Router, type IRouter } from "express";
import catalogueRouter from "./catalogue";
import healthRouter from "./health";

const router: IRouter = Router();

router.use(catalogueRouter);
router.use(healthRouter);

export default router;
