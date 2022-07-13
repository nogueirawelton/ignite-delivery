import { DeliveriesRepositoryInMemory } from "../../repositories/in-memory/DeliveriesRepositoryInMemory";
import { SetDeliverymanUseCase } from "./SetDeliverymanUseCase";

let deliveriesRepositoryInMemory: DeliveriesRepositoryInMemory;
let setDeliverymanUseCase: SetDeliverymanUseCase;

describe("Set a Deliveryman", () => {
  beforeEach(async () => {
    deliveriesRepositoryInMemory = new DeliveriesRepositoryInMemory();
    setDeliverymanUseCase = new SetDeliverymanUseCase(deliveriesRepositoryInMemory);
  })

  it("Should be able to set a deliveryman to a delivery", async() => {
    const delivery = await deliveriesRepositoryInMemory.create({
      id_client: "12345",
      item_name: "Item Example"
    });

    const updatedDelivery = await setDeliverymanUseCase.execute({
      id: delivery.id, 
      id_deliveryman: "12345"
    });
    expect(updatedDelivery).toHaveProperty("id_deliveryman");
  });
})