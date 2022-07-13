import { DeliveriesRepositoryInMemory } from "../../repositories/in-memory/DeliveriesRepositoryInMemory"
import { FindAllWithoutEndDateUseCase } from "./findAllWithoutEndDateUseCase";

let deliveriesRepositoryInMemory: DeliveriesRepositoryInMemory;
let findAllWithoutEndDateUseCase: FindAllWithoutEndDateUseCase;

describe("Get All Deliveries Without End Date", () => {
  beforeEach(async () => {
    deliveriesRepositoryInMemory = new DeliveriesRepositoryInMemory();
    findAllWithoutEndDateUseCase = new FindAllWithoutEndDateUseCase(deliveriesRepositoryInMemory);

    await deliveriesRepositoryInMemory.create({
      id_client: "12345",
      item_name: "Item Example"
    })

    await deliveriesRepositoryInMemory.create({
      id_client: "54321",
      item_name: "Item Example 2"
    })
  });

  it("Should be able to get all the deliveries without end date", async () => {
    const deliveries = await findAllWithoutEndDateUseCase.execute();
    expect(deliveries).toHaveLength(2);
  })
})