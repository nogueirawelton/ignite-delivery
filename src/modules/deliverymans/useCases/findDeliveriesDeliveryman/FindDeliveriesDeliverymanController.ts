import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindDeliveriesDeliverymanUseCase } from "./FindDeliveriesDeliverymanUseCase";

export class FindDeliveriesDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_deliveryman } = request;
    
    const findDeliveriesDeliverymanUseCase = container.resolve(FindDeliveriesDeliverymanUseCase);

    const deliveries = await findDeliveriesDeliverymanUseCase.execute({ id_deliveryman });

    return response.json(deliveries);
  }
}