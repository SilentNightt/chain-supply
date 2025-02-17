import { getShipments } from "@/shared/api/shipments";
import { useQuery } from "@tanstack/react-query";

export const useShipmentsQuery = () => {
  return useQuery({
    queryKey: ["shipments"],
    queryFn: () => getShipments(),
    staleTime: 5 * 1000,
  });
};
