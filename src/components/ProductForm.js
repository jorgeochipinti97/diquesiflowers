"use client";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { ScrollArea } from "./ui/scroll-area";
import { useToast } from "./ui/use-toast";

//AGREGAR CARTELITO DE ENVIOS

export const ProductForm = ({ product }) => {
  const fileTypes = ["JPG", "PNG", "GIF", "JPEG", "AVIF", "WEBP"];
  const [images_, setImages_] = useState([]);
const {toast} = useToast()
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (product) {
      setValue("images", product.images);
      setValue("category", product.category);
    }
  }, [product, setValue]);

  useEffect(() => {
    product && setValue("images", product.images);
    product && setImages_(product.images);
    product && setValue("title", product.title);
    product && setValue("price", product.price);
    product && setValue("description", product.description);
    product && setValue("discountPrice", product.discountPrice);
    product && setValue("category", product.category);
  }, [product]);

  const handleFileChange = async (file) => {
    try {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("upload_preset", "ml_default");

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dwupzgtpo/image/upload`,
        formData
      );
      const data = response.data;
      const currentImages = getValues("images");

      const updatedImages = currentImages
        ? [...currentImages, data.secure_url]
        : [data.secure_url];

      setValue("images", updatedImages);
      setImages_(updatedImages);
    } catch (er) {
      console.log(er);
    }
  };

  const deleteImage = (img) => {
    const newImages = images_.filter((e) => e != img);
    setImages_(newImages);
    setValue("images", newImages);
  };

  const onSubmit = async (data) => {
    const productData = {
      ...data,
    };

    if (!product) {
      // Lógica para crear un nuevo producto
      const response = await axios.post("/api/products", productData);
      toast({
        title: "Producto creado correctamente",
        description: "Gracias por confiar en nosotros",
      });
    } else {
      // Lógica para actualizar un producto existente
      const response = await axios.put("/api/products", {
        _id: product._id,
        ...productData,
      });
      toast({
        title: "Producto modificado correctamente",
        description: "Gracias por confiar en nosotros",
      });
    }
  };

  return (
    <div>
      <section className="my-5">
        <FileUploader
          handleChange={handleFileChange}
          name="file"
          types={fileTypes}
          maxSize={4}
        />
      </section>
      <div className="flex justify-start flex-wrap">
        {images_ &&
          images_.map((e, index) => (
            <div className="mx-2" key={index}>
              <img src={e} className="w-[50px]" />
              <Button
                variant="destructive"
                onClick={() => deleteImage(e)}
                size="sm"
              >
                Eliminar
              </Button>
            </div>
          ))}
      </div>
      <ScrollArea className="h-[50vh]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Titulo" className="my-2" {...register("title")} />
          <Input
            placeholder="Precio"
            type="number"
            className="my-2"
            {...register("price")}
          />
          <Input
            placeholder="Precio con descuento"
            type="number"
            className="my-2"
            {...register("discountPrice")}
          />
          <Input
            placeholder="descripcion"
            className="my-2"
            {...register("description")}
          />

          <section className="my-2">
            <Select
              onValueChange={(e) => setValue("category", e)}
              value={watch("category")}
            >
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="Selecciona una categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categoria</SelectLabel>
                  <SelectItem value="estacion">Ramo de estación</SelectItem>
                  <SelectItem value="premium">Ramo de premium</SelectItem>
                  <SelectItem value="rosas">Ramo de rosas </SelectItem>
                  <SelectItem value="pequeno">Suscripción premium</SelectItem>
                  <SelectItem value="pequeno">Suscripción básica</SelectItem>
                  <SelectItem value="boxes">Boxes</SelectItem>
                  <SelectItem value="florerps">Floreros</SelectItem>
                  <SelectItem value="plantas">Plantas</SelectItem>
                  {/* <SelectItem value="ramonovia">Ramo de novia</SelectItem> */}
                  {/* <SelectItem value="sanvalentin">San valentin</SelectItem> */}
                  {/* <SelectItem value="madre">Dia de la madre</SelectItem> */}
                  {/* <SelectItem value="aniversario">Aniversario</SelectItem> */}
                </SelectGroup>
              </SelectContent>
            </Select>
          </section>

          <section>
            <Button className="mt-5">Enviar</Button>
          </section>
        </form>
      </ScrollArea>
    </div>
  );
};
