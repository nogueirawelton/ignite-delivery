import { inject, injectable } from "tsyringe";
import { Delivery } from "../../entities/Delivery";
import { IDeliveriesRepository } from "../../repositories/IDeliveriesRepository";


interface IRequest {
  id: string;
  id_deliveryman: string
}

@injectable()
export class SetEndDateUseCase {
  constructor(
    @inject("DeliveriesRepository")
    private deliveriesRepository: IDeliveriesRepository
  ) {}

  async execute({ id, id_deliveryman }: IRequest): Promise<void> {
    const delivery = await this.deliveriesRepository.setEndDate(id, id_deliveryman);
  }
}