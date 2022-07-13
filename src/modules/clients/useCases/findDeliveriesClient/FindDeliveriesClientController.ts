import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindDeliveriesClientUseCase } from "./FindDeliveriesClientUseCase";

export class FindDeliveriesClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_client } = request;
    
    const findDeliveriesClientUseCase = container.resolve(FindDeliveriesClientUseCase);

    const deliveries = await findDeliveriesClientUseCase.execute({ id_client });

    return response.json(deliveries);
  }
}