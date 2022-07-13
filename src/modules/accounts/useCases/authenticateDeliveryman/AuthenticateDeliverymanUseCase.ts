import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IDeliverymansRepository } from "../../../deliverymans/repositories/IDeliverymansRepository";
import { auth } from "../../../../config/auth";
 
interface IRequest {
  username: string;
  password: string;
}

@injectable()
export class AuthenticateDeliverymanUseCase {
  constructor(
    @inject("DeliverymansRepository")
    private deliverymansRepository: IDeliverymansRepository
  ) {} 
  async execute({ username, password }: IRequest) {
    const deliveryman = await this.deliverymansRepository.findByUsername(username);

    if (!deliveryman) {
      throw new Error("Username or Password Invalid!");
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if(!passwordMatch) {
      throw new Error("Username or Password Invalid!");
    }

    const token = sign({
      username: deliveryman.username,
    },
    auth.secret_token_deliveryman,
    {
      subject: deliveryman.id,
      expiresIn: auth.token_expires
    });
    
    return {
      token,
      user: {
        id: deliveryman.id,
        username: deliveryman.username,
      }
    }
  }
}