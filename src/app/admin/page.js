"use client";
import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { TableProducts } from "@/components/Tables/productTable";
import TableOrders from "@/components/Tables/ordersTable";
import { ProductForm } from "@/components/ProductForm";

const Page = () => {
  return (
    <div className="flex justify-center">
      <ScrollArea className="h-80vh w-[90%]  h-[80vh] p-5 bg-white rounded-xl flex justify-center">
        <Tabs defaultValue="createproducts" className="h-[60vh] w-11/12">
          <TabsList className="flex justify-center">
            <TabsTrigger value="createproducts">Crear Producto</TabsTrigger>
            <TabsTrigger value="products">Productos</TabsTrigger>
            <TabsTrigger value="orders">Ordenes</TabsTrigger>
          </TabsList>
          <TabsContent value="createproducts">
            <ProductForm />
          </TabsContent>
          <TabsContent value="products">
            <TableProducts />
          </TabsContent>
          <TabsContent value="orders">
            <TableOrders />
          </TabsContent>
        </Tabs>
      </ScrollArea>
    </div>
  );
};

export default Page;
