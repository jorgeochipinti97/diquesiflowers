'use client'
import React, {  useState } from "react";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import useCartStore from "@/hook/useCartStore";


import { calcularComisionMercadoPago, formatPrice } from "@/lib/utils";
import { CheckoutForm } from "../checkoutForms";
import { Button } from "@/components/ui/button";

export const Cart = () => {
  const productos = useCartStore((state) => state.productos);
  const removerProducto = useCartStore((state) => state.removerProducto);


  const decrementarCantidad = useCartStore(
    (state) => state.decrementarCantidad
  );

  const incrementarCantidad = useCartStore(
    (state) => state.incrementarCantidad
  );
  const montoTotal = productos.reduce(
    (acc, producto) => acc + producto.price * producto.quantity,
    0
  );


  const total = useCartStore((state) =>
    state.productos.reduce((acc, producto) => acc + producto.quantity, 0)
  );




  return (
    <AlertDialog className="z-50 ">
      <AlertDialogTrigger asChild>
        <Button variant="icon" className="bg-[#f5f5f7]">
          <span className="bg-sky-50 border border-black px-2 text-black  absolute bottom-8 right-10 text-md font-geist rounded-full">
            {total}
          </span>
          <svg
            width={25}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <g>
              <path
                fill="#000"
                d="M4.97 9.81A2 2 0 016.961 8H17.04a2 2 0 011.99 1.81l.762 8a2 2 0 01-1.99 2.19H6.2a2 2 0 01-1.991-2.19l.761-8z"
                opacity="0.15"
              ></path>
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16 8h1.16a2 2 0 011.993 1.834l.667 8A2 2 0 0117.826 20H6.174a2 2 0 01-1.993-2.166l.666-8A2 2 0 016.84 8H8m8 0H8m8 0V7a4 4 0 10-8 0v1m8 0v4M8 8v4"
              ></path>
            </g>
          </svg>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Carrito</AlertDialogTitle>
          <AlertDialogDescription>
            {" "}
            <Table className=''> 
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Precio</TableHead>
                  <TableHead>Cantidad</TableHead>
                  <TableHead className="">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productos.map((producto) => (
                  <TableRow key={producto.title}>
                    <TableCell className="text-xs">
                      {producto.title} - {producto.size}

                    </TableCell>
                    <TableCell className="text-center">
                      {formatPrice(producto.price)}
                    </TableCell>
                    <TableCell className="text-center">
                      {producto.quantity}
                    </TableCell>
                    <TableCell className="">
                      <div className="flex">
                        <Button
                          variant="outline"
                          className="mx-1"
                          onClick={() => incrementarCantidad(producto.title, producto.size)}
                          >
                          +
                        </Button>
                        <Button
                          variant="outline"
                          className="mx-1"
                          onClick={() => decrementarCantidad(producto.title, producto.size)}
                          >
                          -
                        </Button>
                      </div>
                      <Button
                        className="mt-2"
                        variant="outline"
                        onClick={() => removerProducto(producto.title, producto.size)}
                        >
                        Quitar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
       
            <div className="mt-5">
              <CheckoutForm products={productos} total={montoTotal}  size={'m'}/>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
