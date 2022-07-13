import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
 
import { IClientsRepository } from "../../../clients/repositories/IClientsRepository";
import { auth } from "../../../../config/auth";

interface IRequest {
  username: string;
  password: string;
}

@injectable()
export class AuthenticateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {} 
  async execute({ username, password }: IRequest) {
    const client = await this.clientsRepository.findByUsername(username);

    if (!client) {
      throw new Error("Username or Password Invalid!");
    }

    const passwordMatch = await compare(password, client.password);

    if(!passwordMatch) {
      throw new Error("Username or Password Invalid!");
    }

    const token = sign({
      username: client.username,
    },
    auth.secret_token_client,
    {
      subject: client.id,
      expiresIn: auth.token_expires
    });
    
    return {
      token,
      user: {
        id: client.id,
        username: client.username,
      }
    }
  }
}