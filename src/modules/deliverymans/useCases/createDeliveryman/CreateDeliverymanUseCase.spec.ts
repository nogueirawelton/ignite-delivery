import { DeliverymansRepositoryInMemory } from "../../repositories/in-memory/DeliverymansRepositoryInMemory";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

let deliverymansRepositoryInMemory: DeliverymansRepositoryInMemory;
let createDeliverymanUseCase: CreateDeliverymanUseCase;

describe("Create Deliveryman", () => {
  beforeEach(() => {
    deliverymansRepositoryInMemory = new DeliverymansRepositoryInMemory();
    createDeliverymanUseCase = new CreateDeliverymanUseCase(deliverymansRepositoryInMemory);
  });

  it("Should be able to create a deliveryman", async () => {
    const deliveryman = await createDeliverymanUseCase.execute({
      username: "Username Example",
      password: "Password Example"
    });
    expect(deliveryman).toHaveProperty("id");
  });

  it("Should not be able to create a deliveryman if it already exists", async () => {
    await createDeliverymanUseCase.execute({
      username: "Username Example",
      password: "Password Example"
    });

    await expect(
      createDeliverymanUseCase.execute({
        username: "Username Example",
        password: "Password Example"
      })
    ).rejects.toEqual(new Error("User Already Exists!"));
  });
});