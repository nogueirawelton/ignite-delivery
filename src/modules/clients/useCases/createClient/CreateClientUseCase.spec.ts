import { ClientsRepositoryInMemory } from "../../repositories/in-memory/ClientsRepositoryInMemory";
import { CreateClientUseCase } from "./CreateClientUseCase"

let clientsRepositoryInMemory: ClientsRepositoryInMemory;
let createClientUseCase: CreateClientUseCase;

describe("Create Client", () => {
  beforeEach(() => {
    clientsRepositoryInMemory = new ClientsRepositoryInMemory();
    createClientUseCase = new CreateClientUseCase(clientsRepositoryInMemory);
  });

  it("Should be able to create a client", async () => {
    const client = await createClientUseCase.execute({ 
      username: "Username Example",
      password: "Password Example"
     });

     expect(client).toHaveProperty("id");
  });

  it("Should not be able to create a client if it already exists", async () => {
    await createClientUseCase.execute({ 
      username: "Username Example",
      password: "Password Example"
     });

    await expect(
      createClientUseCase.execute({ 
        username: "Username Example",
        password: "Password Example"
       })  
    ).rejects.toEqual(new Error("User Already Exists!"));
  });
});