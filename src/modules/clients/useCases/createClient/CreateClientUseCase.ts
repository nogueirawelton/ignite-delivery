import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { IClientsRepository } from "../../repositories/IClientsRepository";

@injectable()
export class CreateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}
  async execute({ password, username }: ICreateClientDTO) {
    const userAlreadyExists = await this.clientsRepository.findByUsername(username);

    if(userAlreadyExists) {
      throw new Error("User Already Exists!");
    }

    const hashPassword = await hash(password, 8);
    const user = await this.clientsRepository.create({
      password: hashPassword,
      username
    });

    return user;
  }
}