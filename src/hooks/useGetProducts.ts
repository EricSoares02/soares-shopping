import { api } from "@/services/api";
import { useQuery } from "react-query";

const getProducts = async () => {
  const url = process.env.URL_API;
  console.log(url)
  return api
    .get( url || 'http://localhost:3333/produtos/')
    .then((response) => response.data);
};

export function useProducts() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { data, isLoading };
}
