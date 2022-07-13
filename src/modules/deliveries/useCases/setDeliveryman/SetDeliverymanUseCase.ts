import { inject, injectable } from "tsyringe";
import { Delivery } from "../../entities/Delivery";
import { IDeliveriesRepository } from "../../repositories/IDeliveriesRepository";

interface IRequest {
  id: string;
  id_deliveryman: string;
}

@injectable()
export class SetDeliverymanUseCase {
  constructor(
    @inject("DeliveriesRepository")
    private deliveriesRepository: IDeliveriesRepository
  ) {}
  async execute({ id, id_deliveryman }: IRequest): Promise<Delivery> {

    const delivery = await this.deliveriesRepository.setDeliveryman(id, id_deliveryman);
    
    return delivery;
  }
}