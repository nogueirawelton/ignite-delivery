import { prisma } from "../../../../database/prismaClient";
import { ICreateDeliverymanDTO } from "../../dtos/ICreateDeliverymanDTO";
import { Deliveryman } from "../../entities/Deliveryman";
import { IDeliverymansRepository } from "../../repositories/IDeliverymansRepository";

export class DeliverymansRepository implements IDeliverymansRepository {
  async findByUsername(username: string): Promise<Deliveryman> {
    const deliveryman = await prisma.deliveryman.findUnique({
      where: {
        username,
      },
    });

    return deliveryman;
  }

  async create(data: ICreateDeliverymanDTO): Promise<Deliveryman> {
    const deliveryman = await prisma.deliveryman.create({
      data,
    });
    return deliveryman;
  }
}