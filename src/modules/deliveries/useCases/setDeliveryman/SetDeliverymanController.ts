import { Request, Response } from "express";
import { container } from "tsyringe";
import { SetDeliverymanUseCase } from "./setDeliverymanUseCase";

export class SetDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_deliveryman } = request;
    const { id } = request.params;

    const setDeliverymanUseCase = container.resolve(SetDeliverymanUseCase);

    const delivery = await setDeliverymanUseCase.execute({ id, id_deliveryman });

    return response.json(delivery);
  }
}