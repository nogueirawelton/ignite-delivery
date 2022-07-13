import { container } from "tsyringe";

import { ClientsRepository } from "../../modules/clients/infra/repositories/ClientsRepository";
import { IClientsRepository } from "../../modules/clients/repositories/IClientsRepository";
import { DeliveriesRepository } from "../../modules/deliveries/infra/repositories/DeliveriesRepository";
import { IDeliveriesRepository } from "../../modules/deliveries/repositories/IDeliveriesRepository";
import { DeliverymansRepository } from "../../modules/deliverymans/infra/repositories/DeliverymansRepository";
import { IDeliverymansRepository } from "../../modules/deliverymans/repositories/IDeliverymansRepository";

container.registerSingleton<IClientsRepository>(
  "ClientsRepository",
  ClientsRepository
)

container.registerSingleton<IDeliverymansRepository>(
  "DeliverymansRepository",
  DeliverymansRepository
)

container.registerSingleton<IDeliveriesRepository>(
  "DeliveriesRepository",
  DeliveriesRepository
)