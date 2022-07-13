import { inject, injectable } from "tsyringe";
import { Delivery } from "../../../deliveries/entities/Delivery";
import { IDeliveriesRepository } from "../../../deliveries/repositories/IDeliveriesRepository";

interface IRequest {
  id_client: string;
}

@injectable()
export class FindDeliveriesClientUseCase {
  constructor(
    @inject("DeliveriesRepository")
    private deliveriesRepository: IDeliveriesRepository
  ) {}

  async execute({ id_client }: IRequest): Promise<Delivery[]> {
    const deliveries = await this.deliveriesRepository.findDeliveriesByClient(id_client);

    return deliveries;
  }
}