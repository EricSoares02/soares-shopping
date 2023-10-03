'use client'
import { useSearchProducts } from "@/hooks/useSearchProducts";


export default function SearchPage({
    searchParams,
  }: {
    searchParams: { value: string };
  }){

    const {data} = useSearchProducts(searchParams.value);
    console.log(data)
return(

   <main>
   
   </main>
)

}