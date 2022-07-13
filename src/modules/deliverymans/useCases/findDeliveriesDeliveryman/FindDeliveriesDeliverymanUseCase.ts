import { inject, injectable } from "tsyringe";
import { Delivery } from "../../../deliveries/entities/Delivery";
import { IDeliveriesRepository } from "../../../deliveries/repositories/IDeliveriesRepository";

interface IRequest {
  id_deliveryman: string;
}

@injectable()
export class FindDeliveriesDeliverymanUseCase {
  constructor(
    @inject("DeliveriesRepository")
    private deliveriesRepository: IDeliveriesRepository
  ) {}

  async execute({ id_deliveryman }: IRequest): Promise<Delivery[]> {
    const deliveries = await this.deliveriesRepository.findDeliveriesByDeliveryman(id_deliveryman);

    return deliveries;
  }
}