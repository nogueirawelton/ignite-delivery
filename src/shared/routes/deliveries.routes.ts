import { Router } from "express";
import { ensureAuthenticatedClient } from "../middlewares/ensureAuthenticatedClient";
import { CreateDeliveryController } from "../../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllWithoutEndDateController } from "../../modules/deliveries/useCases/findAllWithoutEndDate/FindAllWithoutEndDateController";
import { ensureAuthenticatedDeliveryman } from "../middlewares/ensureAuthenticatedDeliveryman";
import { SetDeliverymanController } from "../../modules/deliveries/useCases/setDeliveryman/SetDeliverymanController";
import { SetEndDateController } from "../../modules/deliveries/useCases/setEndDate/SetEndDateController";

export const deliveriesRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllWithoutEndDateController = new FindAllWithoutEndDateController();
const setDeliverymanController = new SetDeliverymanController();
const setEndDateController = new SetEndDateController();

deliveriesRoutes.post("/",ensureAuthenticatedClient, createDeliveryController.handle);
deliveriesRoutes.get("/available", ensureAuthenticatedDeliveryman, findAllWithoutEndDateController.handle);
deliveriesRoutes.put("/setDeliveryman/:id", ensureAuthenticatedDeliveryman, setDeliverymanController.handle);
deliveriesRoutes.put("/setEndDate/:id", ensureAuthenticatedDeliveryman, setEndDateController.handle);
