import { inject, injectable } from "tsyringe";
import { Delivery } from "../../entities/Delivery";
import { IDeliveriesRepository } from "../../repositories/IDeliveriesRepository";

@injectable()
export class CreateDeliveryUseCase {
  constructor(
    @inject("DeliveriesRepository")
    private deliveriesRepository: IDeliveriesRepository
  ) {}

 async execute({ item_name, id_client }): Promise<Delivery> {
  const delivery = await this.deliveriesRepository.create({ item_name, id_client });

  return delivery
 } 
}