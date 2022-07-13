import { DeliverymansRepositoryInMemory } from "../../../deliverymans/repositories/in-memory/DeliverymansRepositoryInMemory";
import { CreateDeliverymanUseCase } from "../../../deliverymans/useCases/createDeliveryman/CreateDeliverymanUseCase";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

let authenticateDeliverymanUseCase: AuthenticateDeliverymanUseCase;
let createDeliverymanUseCase: CreateDeliverymanUseCase;
let deliverymansRepositoryInMemory: DeliverymansRepositoryInMemory;

describe("Authenticate Deliveryman", () => {
  beforeEach(async () => {

    deliverymansRepositoryInMemory = new DeliverymansRepositoryInMemory();
    createDeliverymanUseCase = new CreateDeliverymanUseCase(deliverymansRepositoryInMemory);
    authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase(deliverymansRepositoryInMemory)

    await createDeliverymanUseCase.execute({ 
      username: "Name Example",
      password: "Password Example"
     });
  });

  it("Should be able to authenticate a deliveryman", async () => {
     const token = await authenticateDeliverymanUseCase.execute({
      username: "Name Example",
      password: "Password Example"
     })

     expect(token).toHaveProperty("token");
  });

  it("Should not be able to authenticate a deliveryman with invalid password", async () => {
    await expect(
      authenticateDeliverymanUseCase.execute({
        username: "Name Example",
        password: "Wrong Password Example"
       })
    ).rejects.toEqual(new Error("Username or Password Invalid!"))
  })

  it("Should not be able to authenticate a deliveryman with invalid username", async () => {
    await expect(
      authenticateDeliverymanUseCase.execute({
        username: "Wrong Name Example",
        password: "Password Example"
       })
    ).rejects.toEqual(new Error("Username or Password Invalid!"))
  })
});