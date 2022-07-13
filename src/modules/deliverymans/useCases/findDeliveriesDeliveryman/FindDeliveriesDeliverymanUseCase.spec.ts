import { DeliveriesRepositoryInMemory } from "../../../deliveries/repositories/in-memory/DeliveriesRepositoryInMemory";
import { FindDeliveriesDeliverymanUseCase } from "./FindDeliveriesDeliverymanUseCase";

let findDeliveriesDeliverymanUseCase: FindDeliveriesDeliverymanUseCase;
let deliveriesRepositoryInMemory: DeliveriesRepositoryInMemory;

describe("Find Deliveries By Client", () => {
  beforeEach(async () => {
    deliveriesRepositoryInMemory = new DeliveriesRepositoryInMemory()
    findDeliveriesDeliverymanUseCase = new FindDeliveriesDeliverymanUseCase(deliveriesRepositoryInMemory);

    const delivery = await deliveriesRepositoryInMemory.create({
      id_client: "12345",
      item_name: "Item Example"
    });

    await deliveriesRepositoryInMemory.setDeliveryman(delivery.id, "12345");
  });


  it("Should be able to find all client deliveries", async () => {
    const deliveries = await findDeliveriesDeliverymanUseCase.execute({
      id_deliveryman: "12345",
    });

    expect(deliveries).toHaveLength(1);
  })
})