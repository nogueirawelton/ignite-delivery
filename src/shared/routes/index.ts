import { Router } from "express";
import { clientsRoutes } from "./clients.routes";
import { deliveriesRoutes } from "./deliveries.routes";
import { deliverymansRoutes } from "./deliverymans.routes";

export const router = Router();

router.use("/client", clientsRoutes)
router.use("/deliveryman", deliverymansRoutes);
router.use("/delivery", deliveriesRoutes);