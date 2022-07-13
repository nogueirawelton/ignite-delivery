import { DeliveriesRepositoryInMemory } from "../../../deliveries/repositories/in-memory/DeliveriesRepositoryInMemory";
import { FindDeliveriesClientUseCase } from "./FindDeliveriesClientUseCase";

let findDeliveriesClientUseCase: FindDeliveriesClientUseCase;
let deliveriesRepositoryInMemory: DeliveriesRepositoryInMemory;

describe("Find Deliveries By Client", () => {
  beforeEach(async () => {
    deliveriesRepositoryInMemory = new DeliveriesRepositoryInMemory()
    findDeliveriesClientUseCase = new FindDeliveriesClientUseCase(deliveriesRepositoryInMemory);

    await deliveriesRepositoryInMemory.create({
      id_client: "12345",
      item_name: "Item Example"
    })
  });

  it("Should be able to find all client deliveries", async () => {
    const deliveries = await findDeliveriesClientUseCase.execute({
      id_client: "12345",
    });
    expect(deliveries).toHaveLength(1);
  })
})