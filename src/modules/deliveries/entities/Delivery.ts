import { v4 as uuidv4 } from "uuid";

export class Delivery {
  id?: string;
  item_name: string;
  id_client: string;
  id_deliveryman?: string;
  created_at?: Date;
  end_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.created_at = new Date;
    }
  }
}