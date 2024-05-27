"use client";
import React, { useEffect } from "react";

import useForms from "@/hook/useForms";
import { useRouter } from "next/navigation";
import { calcularComisionMercadoPago } from "@/lib/utils";
import axios from "axios";

import { Button } from "./ui/button";

export const CheckoutForm = ({ total, products, size }) => {
  const { setTotal, setProducts } = useForms();
  const { push } = useRouter();
  useEffect(() => {
    setTotal(total);
  }, [total]);

  const mensaje = `Hola! Estoy interesado en estos productos ${products.map(
    (e) => `${e.title}`
  )}  `;

  const mensajeUrlEncoded_ = encodeURIComponent(mensaje);
  const enlaceWaLink_ = `https://wa.me/5491148706677?text=${mensajeUrlEncoded_}`;

  useEffect(() => {
    try {
      initMercadoPago("APP_USR-c18016c5-8a68-40bc-b35e-d6acb1195f15");
    } catch (error) {
      console.error("Error al inicializar MercadoPago", error);
    }
  }, []);

  const items = products.map((product) => ({
    title: product.title, // Nombre del producto
    quantity: product.quantity, // Cantidad fijada a 1 en este ejemplo
    unit_price: calcularComisionMercadoPago(product.price), // Aplica la comisión de MercadoPago
  }));

  const getMessage = () => {
    push(enlaceWaLink_);
  };

  // const getPayment = async () => {
  //   try {
  //     const preference = {
  //       items: items,
  //       back_urls: {
  //         success: enlaceWaLink_, // URL de éxito
  //         failure: "https://www.diquesiflowers.vercel.app", // URL de fallo
  //         pending: "https://www.diquesiflowers.vercel.app", // URL pendiente
  //       },
  //     };

  //     // Realiza la petición POST a la API de MercadoPago
  //     const data = await axios.post(
  //       "https://api.mercadopago.com/checkout/preferences",
  //       preference,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer APP_USR-6130203189119483-041700-1fc5e9eb66d0b739c7aa2875f45d3cd5-797888604`, // Usa el Access Token del usuario
  //         },
  //       }
  //     );

  //     // Si la petición es exitosa, redirige al usuario al 'init_point'
  //     if (data) {
  //       push(data.data.init_point);
  //     }
  //   } catch (err) {
  //     console.log(err); // Maneja cualquier error que ocurra durante la petición
  //   }
  // };

  useEffect(() => {
    setProducts(products);
  }, [products]);

  return (
    <div className="">
      <div className="flex justify-start">
        <Button
          disabled={!size}

          className="w-fit py-5 text-md tracking-tighter"
          onClick={getMessage}
          size="lg"
        >
              <svg
              width={20}
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g stroke="#fff" strokeWidth="1.5">
        <path d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12z"></path>
        <path strokeLinecap="round" d="M10 16H6M14 16h-1.5M2 10h20"></path>
      </g>
    </svg>
Pagar
          
        </Button>
      </div>
    </div>
  );
};
