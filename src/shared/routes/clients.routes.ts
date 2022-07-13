import { Router } from "express";
import { AuthenticateClientController } from "../../modules/accounts/useCases/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "../../modules/clients/useCases/createClient/CreateClientController";
import { FindDeliveriesClientController } from "../../modules/clients/useCases/findDeliveriesClient/FindDeliveriesClientController";
import { ensureAuthenticatedClient } from "../middlewares/ensureAuthenticatedClient";

export const clientsRoutes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findDeliveriesClientController = new FindDeliveriesClientController();

clientsRoutes.post("/", createClientController.handle);
clientsRoutes.post("/auth", authenticateClientController.handle);
clientsRoutes.get('/deliveries', ensureAuthenticatedClient, findDeliveriesClientController.handle)