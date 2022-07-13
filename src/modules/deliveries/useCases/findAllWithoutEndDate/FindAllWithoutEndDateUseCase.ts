import { inject, injectable } from "tsyringe";
import { Delivery } from "../../entities/Delivery";
import { IDeliveriesRepository } from "../../repositories/IDeliveriesRepository";

@injectable()
export class FindAllWithoutEndDateUseCase {
  constructor(
    @inject("DeliveriesRepository")
    private deliveriesRepository: IDeliveriesRepository
  ) {}

  async execute(): Promise<Delivery[]> {
    const deliveries = await this.deliveriesRepository.findAllWithoutEndDate();

    return deliveries;
  }
}