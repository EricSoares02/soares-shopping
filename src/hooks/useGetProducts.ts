import { api } from "@/services/api";
import { useQuery } from "react-query";

const getProducts = async () => {
  return api
    .get("http://localhost:3333/produtos")
    .then((response) => response.data);
};

export function useProducts() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { data, isLoading };
}
