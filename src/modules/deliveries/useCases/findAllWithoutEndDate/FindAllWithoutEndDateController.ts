import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllWithoutEndDateUseCase } from "./findAllWithoutEndDateUseCase";

export class FindAllWithoutEndDateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllWithoutEndDateUseCase = container.resolve(FindAllWithoutEndDateUseCase);

    const deliveries = await findAllWithoutEndDateUseCase.execute();
    return response.json(deliveries);
  }
}