import { prisma } from "../../../../database/prismaClient";
import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { Client } from "../../entities/Client";
import { IClientsRepository } from "../../repositories/IClientsRepository";

export class ClientsRepository implements IClientsRepository {
  async findByUsername(username: string): Promise<Client> {
    const client = await prisma.client.findUnique({
      where: {
        username,
      }
    });
    return client;
  }
  
  async create(data: ICreateClientDTO): Promise<Client> {
    const client = await prisma.client.create({
      data,
    });
    return client;
  }
}