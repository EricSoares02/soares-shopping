import { api } from "@/services/api";
import { PropsProduct } from "@/types/product";
import { AxiosPromise } from "axios";
import { useQuery } from "react-query";

const getProduct = (productId: string): AxiosPromise<PropsProduct> => {
  return api
    .get(`http://localhost:3333/produtos/${productId}`)
    .then((response) => response.data);
};

export function useProduct(id: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(id),
    enabled: !!id,
  });
  return { data, isLoading };
}
