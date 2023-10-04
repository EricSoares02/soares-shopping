import { PropsProduct } from "@/types/product";

export const hadleAddTocart = (product: PropsProduct ) => {
  

  let cart = localStorage.getItem("cart");
  let cartItemsArray = new Array;

  if (cart) {
    //convertendo para array
     cartItemsArray = JSON.parse(cart);
    // verificando se existe o produto no localstorage
    let existingProductIndex = cartItemsArray.findIndex(
      (item: { id: string }) => item.id === product.id
    );
    //se o produto existe no localstorage, aumenta a quantidade
    if (existingProductIndex != -1) {
     return cartItemsArray[existingProductIndex].quatity += 1;
      //se o produto não existe no localstorage, insere ele
    } else {
      cartItemsArray.push({ ...product, id: product.id, quantity: 1 });
    }

    localStorage.setItem("cart-items", JSON.stringify(cartItemsArray));
  } else {
    return localStorage.setItem(
      "cart-items",
      JSON.stringify([
        {
          ...product,
          id: product.id,
          quantity: 1,
        },
      ])
    );
  }

};
