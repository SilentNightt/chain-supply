import { instance } from "@/shared/config/axiosInstance";
import { AxiosResponse } from "axios";
import { IShipment } from "../types/shipment.interface";

export const getShipments = async (): Promise<IShipment[]> => {
  const res: AxiosResponse<IShipment[]> = await instance.get(`/shipments`);
  return res.data;
};
