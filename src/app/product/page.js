"use client";
import useProducts from "@/hook/useProducts";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import useCartStore from "@/hook/useCartStore";
const Page = () => {
  const [producto, setProducto] = useState({});
  const searchParams = useSearchParams();
  const { products } = useProducts();
  const agregarProducto = useCartStore((state) => state.agregarProducto);

  useEffect(() => {
    const d = searchParams.get("_id");
    d && products && setProducto(products.filter((e) => e._id == d)[0]);
  }, [products]);
  const { push } = useRouter();
  return (
    <div className=" py-10">
      <Button className="m-5" onClick={() => push("/")} variant="outline">
        Volver al inicio
      </Button>
      {producto && (
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="w-full flex justify-center">
            <Carousel className="w-8/12 md:w-12/12 max-w-xs">
              <CarouselContent>
                {producto.images &&
                  producto.images.map((e) => (
                    <CarouselItem key={e}>
                      <img src={e} className="rounded-xl" />
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="md:mx-0 mx-2">
            <p className="text-4xl md:text-7xl text-center  tracking-tighter md:mt-0 mt-10 font-bold">
              {producto.title}
            </p>
            <p className="text-md  text-center tracking-tighter mt-5 ">
              {producto.description}
            </p>
            <p className="text-2xl md:text-4xl text-center  tracking-tighter mt-5">
              {formatPrice(producto.price)}
            </p>
            <div className="mt-5 flex justify-center md:justify-start">
              <Button
                onClick={() => {
                  agregarProducto({
                    title: producto.title,
                    price: producto.price,
                    images: producto.images,
                  });
                }}
              >
                Agregar al carrito
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
