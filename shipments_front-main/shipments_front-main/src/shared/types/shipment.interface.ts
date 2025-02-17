export interface IShipment {
  id: string;
  productName: string;
  supplier: string;
  shipmentDate: string;
  status: string;
  location: string;
  category?: string;
}
