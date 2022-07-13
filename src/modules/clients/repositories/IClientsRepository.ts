import { ICreateClientDTO } from "../dtos/ICreateClientDTO";
import { Client } from "../entities/Client";

export interface IClientsRepository {
  findByUsername(username: string): Promise<Client>
  create({ username, password }: ICreateClientDTO): Promise<Client>
}