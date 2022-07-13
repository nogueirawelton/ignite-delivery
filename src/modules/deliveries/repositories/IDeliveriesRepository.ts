import { ICreateDeliveryDTO } from "../dtos/ICreateDeliveryDTO";
import { Delivery } from "../entities/Delivery";

export interface IDeliveriesRepository {
  create({ item_name, id_client }: ICreateDeliveryDTO): Promise<Delivery>
  findAllWithoutEndDate(): Promise<Delivery[]>
  setDeliveryman(id: string, id_deliveryman: string): Promise<Delivery>
  setEndDate(id: string, id_deliveryman: string): Promise<void>
  findDeliveriesByClient(id_client: string): Promise<Delivery[]>
  findDeliveriesByDeliveryman(id_deliveryman: string): Promise<Delivery[]>
}