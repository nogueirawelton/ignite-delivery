import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { ICreateDeliverymanDTO } from "../../dtos/ICreateDeliverymanDTO";
import { IDeliverymansRepository } from "../../repositories/IDeliverymansRepository";

@injectable()
export class CreateDeliverymanUseCase {
  constructor(
    @inject("DeliverymansRepository")
    private deliverymansRepository: IDeliverymansRepository
  ) {}
  async execute({ password, username }: ICreateDeliverymanDTO) {
    const userAlreadyExists = await this.deliverymansRepository.findByUsername(username);

    if(userAlreadyExists) {
      throw new Error("User Already Exists!");
    }

    const hashPassword = await hash(password, 8);
    const user = await this.deliverymansRepository.create({
      password: hashPassword,
      username
    });

    return user;
  }
}