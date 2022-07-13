import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { Client } from "../../entities/Client";
import { IClientsRepository } from "../IClientsRepository";

export class ClientsRepositoryInMemory implements IClientsRepository {
  clients: Client[] = [];

  async findByUsername(username: string): Promise<Client> {
    const client = this.clients.find((client) => client.username === username);
    return client;
  }

  async create({ username, password }: ICreateClientDTO): Promise<Client> {
    const client = new Client();
    Object.assign(client, {
      username,
      password
    });
    
    this.clients.push(client);
    return client;
  }
}