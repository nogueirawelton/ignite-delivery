import { ICreateDeliverymanDTO } from "../../dtos/ICreateDeliverymanDTO";
import { Deliveryman } from "../../entities/Deliveryman";
import { IDeliverymansRepository } from "../IDeliverymansRepository";

export class DeliverymansRepositoryInMemory implements IDeliverymansRepository {
  deliverymans: Deliveryman[] = [];

  async findByUsername(username: string): Promise<Deliveryman> {
    const deliveryman = this.deliverymans.find((deliveryman) => deliveryman.username === username);
    return deliveryman;
  }
  
  async create({ username, password }: ICreateDeliverymanDTO): Promise<Deliveryman> {
    const deliveryman = new Deliveryman();

    Object.assign(deliveryman, {
      username,
      password
    });

    this.deliverymans.push(deliveryman);
    return deliveryman;
  }
}