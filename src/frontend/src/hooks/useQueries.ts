import { useMutation, useQuery } from "@tanstack/react-query";
import type { BusinessInfo, MenuItem, Review } from "../backend.d";
import { useActor } from "./useActor";

export function usePopularMenuItems() {
  const { actor, isFetching } = useActor();
  return useQuery<MenuItem[]>({
    queryKey: ["popularMenuItems"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPopularMenuItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function usePublishedReviews() {
  const { actor, isFetching } = useActor();
  return useQuery<Review[]>({
    queryKey: ["publishedReviews"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPublishedReviews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useBusinessInfo() {
  const { actor, isFetching } = useActor();
  return useQuery<BusinessInfo>({
    queryKey: ["businessInfo"],
    queryFn: async () => {
      if (!actor) {
        return {
          hours: "Open until 11:30 PM daily",
          address: "Keshav Nagar, Mundhwa, Pune, Maharashtra 411036",
          rating: BigInt(4),
          phone: "070574 27575",
        };
      }
      return actor.getBusinessInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export interface ReservationFormData {
  name: string;
  phone: string;
  email: string;
  reservedDate: string;
  reservedTime: string;
  partySize: number;
  message: string;
}

export function useSubmitReservation() {
  const { actor } = useActor();
  return useMutation<bigint, Error, ReservationFormData>({
    mutationFn: async (data) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitForm(
        data.name,
        data.phone,
        data.email,
        data.reservedDate,
        data.reservedTime,
        BigInt(data.partySize),
        data.message,
      );
    },
  });
}
