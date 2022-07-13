import { ICreateDeliveryDTO } from "../../dtos/ICreateDeliveryDTO";
import { Delivery } from "../../entities/Delivery";
import { IDeliveriesRepository } from "../IDeliveriesRepository";

export class DeliveriesRepositoryInMemory implements IDeliveriesRepository {
  deliveries: Delivery[] = [];

  async setDeliveryman(id: string, id_deliveryman: string): Promise<Delivery> {
    const delivery = this.deliveries.find(delivery => delivery.id === id);
    Object.assign(delivery, {
      id_deliveryman
    });
    return delivery;
  }

  async setEndDate(id: string, id_deliveryman: string): Promise<void> {
    const delivery = this.deliveries.find(
      delivery => delivery.id === id &&
      delivery.id_deliveryman === id_deliveryman
    );

    Object.assign(delivery, {
      end_at: new Date()
    });
  }

  async findDeliveriesByClient(id_client: string): Promise<Delivery[]> {
    const deliveries = this.deliveries.filter((delivery) => delivery.id_client === id_client);
    return deliveries;
  }

  async findDeliveriesByDeliveryman(id_deliveryman: string): Promise<Delivery[]> {
    const deliveries = this.deliveries.filter((delivery) => delivery.id_deliveryman === id_deliveryman);
    return deliveries;
  }

  async findAllWithoutEndDate(): Promise<Delivery[]> {
    const deliveries = this.deliveries.filter((delivery) => !delivery.end_at);
    return deliveries;
  }

  async create({ item_name, id_client }: ICreateDeliveryDTO): Promise<Delivery> {
    const delivery = new Delivery();

    Object.assign(delivery, {
      item_name,
      id_client
    });

    this.deliveries.push(delivery);
    return delivery;
  }
}