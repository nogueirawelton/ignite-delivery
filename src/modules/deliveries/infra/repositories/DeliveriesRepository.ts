import { prisma } from "../../../../database/prismaClient";
import { ICreateDeliveryDTO } from "../../dtos/ICreateDeliveryDTO";
import { Delivery } from "../../entities/Delivery";
import { IDeliveriesRepository } from "../../repositories/IDeliveriesRepository";

export class DeliveriesRepository implements IDeliveriesRepository {
  async setEndDate(id: string, id_deliveryman: string): Promise<void> {
    const delivery = await prisma.delivery.updateMany({
      where: {
        id,
        id_deliveryman
      },
      data: {
        end_at: new Date(),
      },
    });
  }
  
  async findDeliveriesByDeliveryman(id_deliveryman: string): Promise<Delivery[]> {
    const deliveries = await prisma.delivery.findMany({
      where: {
        id_deliveryman
      }
    });
    return deliveries;
  }

  async findDeliveriesByClient(id_client: string): Promise<Delivery[]> {
    const deliveries = await prisma.delivery.findMany({
      where: {
        id_client
      }
    });
    return deliveries;
  }

  async setDeliveryman(id: string, id_deliveryman: string): Promise<Delivery> {
    const delivery = await prisma.delivery.update({
      where: {
        id,
      },
      data: {
        id_deliveryman
      }
    });
    return delivery;
  }

  async create(data: ICreateDeliveryDTO): Promise<Delivery> {
    const delivery = await prisma.delivery.create({
      data,
    });
    return delivery;
  }

  async findAllWithoutEndDate(): Promise<Delivery[]> {
    const deliveries = await prisma.delivery.findMany({
      where: {
        end_at: null,
        id_deliveryman: null
      }
    });
    return deliveries;
  }
}