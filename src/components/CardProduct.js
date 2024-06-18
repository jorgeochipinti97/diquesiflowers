"use client";
import React, { useEffect, useState } from "react";
// bg-[#BDE0FE]
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/utils";
import useCartStore from "@/hook/useCartStore";
import EmblaCarousel from "./Embla/EmblaCarousel";
import { useToast } from "./ui/use-toast";
import { ScrollArea } from "./ui/scroll-area";

export const CardProduct = ({ product }) => {
  const { push } = useRouter();
  const { toast } = useToast();
  const agregarProducto = useCartStore((state) => state.agregarProducto);

  return (
    <div className="flex justify-center">
      {product && (
        <Card className="w-10/12 mt-5 
        bg-[#fefae0]
         border-none">
          <CardHeader className="">
            <div className="flex justify-center">
              <img
                src={product.images[0]}
                className="w-12/12 h-[400px] rounded-xl"
              />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle asChild className="flex justify-around">
              <span className=" font-geist tracking-tighter text-pink-950 ml-2  capitalize">
                {" "}
                {product.title}
              </span>{" "}
              <span className=" font-mono font-semibold text-md ">
                {formatPrice(product.price)}
              </span>
            </CardTitle>

            <section className="mt-5">
              <Button
                variant="secondary"
                className='border border-black'
                onClick={() => push(`/product?_id=${product._id}`)}
              >
                Ver más
              </Button>
            </section>
          </CardContent>

          <CardFooter className="flex flex-col">
            <Button
              className=" w-full "

              onClick={() => {
                agregarProducto({
                  title: product.title,
                  price: product.price,
                  images: product.images,
                });
                toast({
                  title: "Agregado al carrito correctamente",
                  description: "Gracias por confiar en nosotros",
                });
              }}
            >
              <svg
                width={20}
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#f5f5f7"
                  fillRule="evenodd"
                  d="M14 2a1 1 0 10-2 0v6.586L9.707 6.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L14 8.586V2zM1 3a1 1 0 011-1h.472a3 3 0 012.895 2.21l.416 1.527L7.763 13h10.473l1.98-7.263a1 1 0 111.929.526l-1.98 7.263A2 2 0 0118.237 15H8v1a1 1 0 001 1h9a1 1 0 01.822 1.57 2.5 2.5 0 11-4.771.43h-3.101a2.5 2.5 0 11-4.32-1.16A2.987 2.987 0 016 16v-1.866l-2.147-7.87-.416-1.527A1 1 0 002.472 4H2a1 1 0 01-1-1zm15 16.5a.5.5 0 111 0 .5.5 0 01-1 0zm-8 0a.5.5 0 111 0 .5.5 0 01-1 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Agregar al carrito
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};
