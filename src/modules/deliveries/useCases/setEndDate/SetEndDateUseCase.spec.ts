import { DeliveriesRepositoryInMemory } from "../../repositories/in-memory/DeliveriesRepositoryInMemory";
import { SetEndDateUseCase } from "./SetEndDateUseCase";

let deliveriesRepositoryInMemory: DeliveriesRepositoryInMemory;
let setEndDateUseCase: SetEndDateUseCase;

describe("Set a End Date", () => {
  beforeEach(async () => {
    deliveriesRepositoryInMemory = new DeliveriesRepositoryInMemory();
    setEndDateUseCase = new SetEndDateUseCase(deliveriesRepositoryInMemory);
  })

  it("Should be able to set a end date to a delivery", async() => {
    const delivery = await deliveriesRepositoryInMemory.create({
      id_client: "12345",
      item_name: "Item Example"
    });

    await deliveriesRepositoryInMemory.setDeliveryman(delivery.id, "12345");

    const updatedDelivery = setEndDateUseCase.execute({
      id: delivery.id,
      id_deliveryman: "12345"
    });

    
    expect(updatedDelivery);
  });
})