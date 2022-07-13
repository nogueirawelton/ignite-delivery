import { Request, Response } from "express";
import { container } from "tsyringe";
import { SetEndDateUseCase } from "./SetEndDateUseCase";

export class SetEndDateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    const { id_deliveryman } = request.params;
    
    const setEndDeliveryUseCase = container.resolve(SetEndDateUseCase)
    await setEndDeliveryUseCase.execute({ id, id_deliveryman })

    return response.send();
  }
}