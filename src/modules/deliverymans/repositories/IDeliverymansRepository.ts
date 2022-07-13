import { ICreateDeliverymanDTO } from "../dtos/ICreateDeliverymanDTO"
import { Deliveryman } from "../entities/Deliveryman"

export interface IDeliverymansRepository {
  findByUsername(username: string): Promise<Deliveryman>
  create({ username, password }: ICreateDeliverymanDTO): Promise<Deliveryman>
}