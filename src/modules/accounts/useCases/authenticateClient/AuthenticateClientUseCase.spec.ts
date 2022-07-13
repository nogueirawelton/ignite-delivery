import { ClientsRepositoryInMemory } from "../../../clients/repositories/in-memory/ClientsRepositoryInMemory";
import { CreateClientUseCase } from "../../../clients/useCases/createClient/CreateClientUseCase";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

let clientsRepositoryInMemory: ClientsRepositoryInMemory;
let authenticateClientUseCase: AuthenticateClientUseCase;
let createClientUseCase: CreateClientUseCase;

describe("Authenticate Client", () => {
  beforeEach(async () => {
    clientsRepositoryInMemory = new ClientsRepositoryInMemory();
    createClientUseCase = new CreateClientUseCase(clientsRepositoryInMemory);
    authenticateClientUseCase = new AuthenticateClientUseCase(clientsRepositoryInMemory);

    await createClientUseCase.execute({ 
      username: "Name Example",
      password: "Password Example"
     });
  });

  it("Should be able to authenticate a client", async () => {
     const token = await authenticateClientUseCase.execute({
      username: "Name Example",
      password: "Password Example"
     })

     expect(token).toHaveProperty("token");
  });

  it("Should not be able to authenticate a client with invalid password", async () => {
    await expect(
      authenticateClientUseCase.execute({
        username: "Name Example",
        password: "Wrong Password Example"
       })
    ).rejects.toEqual(new Error("Username or Password Invalid!"))
  })

  it("Should not be able to authenticate a client with invalid username", async () => {
    await expect(
      authenticateClientUseCase.execute({
        username: "Wrong Name Example",
        password: "Password Example"
       })
    ).rejects.toEqual(new Error("Username or Password Invalid!"))
  })
});