import { instance } from "@/shared/config/axiosInstance";
import { AxiosResponse } from "axios";
import { IShipment } from "../types/shipment.interface";

export const getShipments = async (): Promise<IShipment[]> => {
  const res: AxiosResponse<IShipment[]> = await instance.get(
    `https://67a99b306e9548e44fc41e3f.mockapi.io/shipments`,
  );

  return res.data;
};
