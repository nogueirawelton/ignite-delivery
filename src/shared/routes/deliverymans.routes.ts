import { Router } from "express";

import { AuthenticateDeliverymanController } from "../../modules/accounts/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliverymanController } from "../../modules/deliverymans/useCases/createDeliveryman/CreateDeliverymanController";
import { FindDeliveriesDeliverymanController } from "../../modules/deliverymans/useCases/findDeliveriesDeliveryman/FindDeliveriesDeliverymanController";
import { ensureAuthenticatedDeliveryman } from "../middlewares/ensureAuthenticatedDeliveryman";

export const deliverymansRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const findDeliveriesDeliverymanController = new FindDeliveriesDeliverymanController();

deliverymansRoutes.post("/", createDeliverymanController.handle);
deliverymansRoutes.post("/auth", authenticateDeliverymanController.handle);
deliverymansRoutes.get("/deliveries", ensureAuthenticatedDeliveryman, findDeliveriesDeliverymanController.handle);