import { DeliveriesRepositoryInMemory } from "../../repositories/in-memory/DeliveriesRepositoryInMemory";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

let deliveriesRepositoryInMemory: DeliveriesRepositoryInMemory;
let createDeliveryUseCase: CreateDeliveryUseCase;

describe("Create Delivery", () => {
  beforeEach(() => {
    deliveriesRepositoryInMemory = new DeliveriesRepositoryInMemory();
    createDeliveryUseCase = new CreateDeliveryUseCase(deliveriesRepositoryInMemory);  
  });

  it("Should be able to create a new delivery", async () => {
    const delivery = await createDeliveryUseCase.execute({
      item_name: "ItemName Example",
      id_client: "IdClient Example"
    })
    
    expect(delivery).toHaveProperty("id");
  })
})