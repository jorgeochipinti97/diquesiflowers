"use client";
import { CardProduct } from "@/components/CardProduct";
import { Cart } from "@/components/Cart";
import EmblaCarousel from "@/components/Embla/EmblaCarousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import useProducts from "@/hook/useProducts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { push } = useRouter();
  const { products, loading, error } = useProducts();

  return (
    <div className="min-h-screen bg-[#FFC8DD] pb-20">
      <div className="fixed flex left-5 bottom-5 z-50 ">
        <div onClick={() => push("https://walink.co/e61bd2")}>
          <svg
            width={50}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 32"
            className="cursor-pointer opacity-75 hover:opacity-100 transition-all duration-200 hover:scale-110"
          >
            <g>
              <path
                fill="#BFC8D0"
                fillRule="evenodd"
                d="M16 31c7.732 0 14-6.268 14-14S23.732 3 16 3 2 9.268 2 17c0 2.51.661 4.867 1.818 6.905L2 31l7.315-1.696A13.938 13.938 0 0016 31zm0-2.154c6.543 0 11.846-5.303 11.846-11.846 0-6.542-5.303-11.846-11.846-11.846C9.458 5.154 4.154 10.458 4.154 17c0 2.526.79 4.867 2.138 6.79L5.23 27.77l4.049-1.013a11.791 11.791 0 006.72 2.09z"
                clipRule="evenodd"
              ></path>
              <path
                fill="url(#paint0_linear_87_7264)"
                d="M28 16c0 6.627-5.373 12-12 12-2.528 0-4.873-.782-6.807-2.116L5.09 26.909l1.075-4.03A11.945 11.945 0 014 16C4 9.373 9.373 4 16 4s12 5.373 12 12z"
              ></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16c0 2.51.661 4.867 1.818 6.905L2 30l7.315-1.696A13.938 13.938 0 0016 30zm0-2.154c6.543 0 11.846-5.303 11.846-11.846 0-6.542-5.303-11.846-11.846-11.846C9.458 4.154 4.154 9.458 4.154 16c0 2.526.79 4.867 2.138 6.79L5.23 26.77l4.049-1.013a11.791 11.791 0 006.72 2.09z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#fff"
                d="M12.5 9.5c-.333-.669-.844-.61-1.36-.61-.921 0-2.359 1.105-2.359 3.16 0 1.684.742 3.528 3.243 6.286 2.414 2.662 5.585 4.039 8.218 3.992 2.633-.047 3.175-2.313 3.175-3.078 0-.339-.21-.508-.356-.554-.897-.43-2.552-1.233-2.928-1.384-.377-.15-.573.054-.695.165-.342.325-1.019 1.284-1.25 1.5-.232.215-.578.106-.721.024-.53-.212-1.964-.85-3.107-1.958-1.415-1.371-1.498-1.843-1.764-2.263-.213-.336-.057-.542.021-.632.305-.351.726-.894.914-1.164.189-.27.04-.679-.05-.934-.387-1.097-.715-2.015-.981-2.55z"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_87_7264"
                  x1="26.5"
                  x2="4"
                  y1="7"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5BD066"></stop>
                  <stop offset="1" stopColor="#27B43E"></stop>
                </linearGradient>
              </defs>
            </g>
          </svg>
        </div>
        <div
          onClick={() =>
            push("https://www.instagram.com/lafloreria_dediquesi/")
          }
        >
          <svg
            width={50}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="mx-2 cursor-pointer opacity-75 hover:opacity-100 transition-all duration-200 hover:scale-110"
            viewBox="0 0 32 32"
          >
            <g>
              <rect
                width="28"
                height="28"
                x="2"
                y="2"
                fill="url(#paint0_radial_87_7153)"
                rx="6"
              ></rect>
              <rect
                width="28"
                height="28"
                x="2"
                y="2"
                fill="url(#paint1_radial_87_7153)"
                rx="6"
              ></rect>
              <rect
                width="28"
                height="28"
                x="2"
                y="2"
                fill="url(#paint2_radial_87_7153)"
                rx="6"
              ></rect>
              <path
                fill="#fff"
                d="M23 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              ></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M16 21a5 5 0 100-10 5 5 0 000 10zm0-2a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M6 15.6c0-3.36 0-5.04.654-6.324a6 6 0 012.622-2.622C10.56 6 12.24 6 15.6 6h.8c3.36 0 5.04 0 6.324.654a6 6 0 012.622 2.622C26 10.56 26 12.24 26 15.6v.8c0 3.36 0 5.04-.654 6.324a6 6 0 01-2.622 2.622C21.44 26 19.76 26 16.4 26h-.8c-3.36 0-5.04 0-6.324-.654a6 6 0 01-2.622-2.622C6 21.44 6 19.76 6 16.4v-.8zM15.6 8h.8c1.713 0 2.878.002 3.778.075.877.072 1.325.202 1.638.361a4 4 0 011.748 1.748c.16.313.29.761.36 1.638.074.9.076 2.065.076 3.778v.8c0 1.713-.002 2.878-.075 3.778-.072.877-.202 1.325-.361 1.638a4 4 0 01-1.748 1.748c-.313.16-.761.29-1.638.36-.9.074-2.065.076-3.778.076h-.8c-1.713 0-2.878-.002-3.778-.075-.877-.072-1.325-.202-1.638-.361a4 4 0 01-1.748-1.748c-.16-.313-.29-.761-.36-1.638C8.001 19.278 8 18.113 8 16.4v-.8c0-1.713.002-2.878.075-3.778.072-.877.202-1.325.361-1.638a4 4 0 011.748-1.748c.313-.16.761-.29 1.638-.36.9-.074 2.065-.076 3.778-.076z"
                clipRule="evenodd"
              ></path>
              <defs>
                <radialGradient
                  id="paint0_radial_87_7153"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(-55.376 27.916 .066) scale(25.5196)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#B13589"></stop>
                  <stop offset="0.793" stopColor="#C62F94"></stop>
                  <stop offset="1" stopColor="#8A3AC8"></stop>
                </radialGradient>
                <radialGradient
                  id="paint1_radial_87_7153"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(-65.136 29.766 6.89) scale(22.5942)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E0E8B7"></stop>
                  <stop offset="0.445" stopColor="#FB8A2E"></stop>
                  <stop offset="0.715" stopColor="#E2425C"></stop>
                  <stop offset="1" stopColor="#E2425C" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                  id="paint2_radial_87_7153"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(38.50003 -5.5 1.1764 8.23476 .5 3)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.157" stopColor="#406ADC"></stop>
                  <stop offset="0.468" stopColor="#6A45BE"></stop>
                  <stop offset="1" stopColor="#6A45BE" stopOpacity="0"></stop>
                </radialGradient>
              </defs>
            </g>
          </svg>
        </div>
      </div>
      <div className="fixed right-5 z-50 bottom-10   mt-5 ">
        <Cart />
      </div>
      <div className="flex justify-center pt-5">
        <img src="/logo.png" className="w-12/12 md:w-7/12" />
      </div>
      <div className="mt-10">
        <EmblaCarousel
          images={["/4.jpg", "5.jpg", "/6.jpg"]}
          heigh={"h-full"}
        />
      </div>

      <p className="text-5xl md:text-7xl font-semibold tracking-tighter text-pink-950  ml-20 mt-10">
        Sobre nosotras
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="w-full flex justify-center mt-10  md:hidden ">
          <EmblaCarousel
            images={["/she1.webp", "/she2.webp", "/she3.webp", "/she4.webp"]}
            heigh={"60vh"}
          />
        </div>
        <div className="w-full  md:flex hidden justify-center mt-10  ">
          <Carousel className="w-12/12 max-w-xs">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <img src="/she1.webp" className="rounded-xl" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <img src="/she2.webp" className="rounded-xl" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <img src="/she3.webp" className="rounded-xl" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <img src="/she4.webp" className="rounded-xl" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="flex justify-center">
          <div className="flex w-11/12   shadowLow items-st art flex-col justify-start md:mr-5 p-5 rounded-xl mt-10 bg-white">
            <p className=" text-3xl text-pink-950  font-bold font-geist ">
              HOLA COMUNIDAD🫶🏻
            </p>
            <p className="my-2 text-xl text-pink-950   tracking-tighter">
              Somos Lore y Feli les queremos presentar nuestro proyecto de
              flores 💐{" "}
            </p>
            <p className="my-2 text-xl text-pink-950  tracking-tighter">
              Desde muy chicas influenciadas por nuestras abuelas y madres
              aprendimos a amar las flores🌸
            </p>
            <p className="my-2 text-xl text-pink-950   tracking-tighter">
              Desde muy chicas influenciadas por nuestras abuelas y madres
              aprendimos a amar las flores🌸
            </p>
            <p className="my-2 text-xl text-pink-950   tracking-tighter">
              Lore con su emprendimiento de eventos y Feli con su hermosa locura
              de llenar su vida de flores
            </p>
            <p className="my-2 text-xl text-pink-950   tracking-tighter">
              La vida nos cruzó hace un par de años atrás y durante una charla
              surgió la loca idea de
              <span className="font-bold text-2xl ml-2">“LA FLORERÍA”</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
        <div className="flex items-center justify-center">
          <p className="font-geist text-pink-950  font-semibold tracking-tighter text-2xl w-10/12">
            Regalar o regalarse flores es una caricia al alma, dan vida y
            alegría. <br />
            <br /> Ponen calidez, color y cambian cualquier ambiente donde
            llegan. <br />
            <br /> Regalemos felicidad a quienes amamos con Flores 🌷
          </p>
        </div>
        <div className="flex justify-center mt-10 md:mt-0">
          <img
            src="/diqusii.webp"
            className=" w-10/12 md:w-6/12 rounded-xl shadowLow"
          />
        </div>
      </div>
      <section>
        <p className="text-center font-bold text-2xl md:text-7xl text-pink-950 mt-10">
          🌸 Workshop de Flores 🌸
        </p>

        <div className="text-pink-950 text-center mx-2 tracking-tighter text-md md:text-3xl">
          Aprende a crear hermosos arreglos florales en un ambiente relajado y
          amigable.
          {/* <div className="">
            <div className="flex justify-center">
              <Card className="p-3 w-11/12 mt-5">
                <CardTitle className="text-center">Información</CardTitle>
                <CardContent>
                  <div className="text-start mt-5">
                    <p className="text-md mb-2">
                      <span className="text-2xl">📅</span> Sábado 08 de Junio
                    </p>
                    <p className="text-md mb-2">
                      <span className="text-2xl">🕒</span> 16:30 - 19:30 hs
                    </p>
                    <p className="text-md mb-2">
                      <span className="text-xl">📍</span> Gral. Las Heras 525,
                      Monte Grande, Buenos Aires
                    </p>
                    <p className="text-md mb-2">
                      <span className="text-2xl">💰</span> $28.000
                    </p>
                    <p className="text-md ">
                      Incluye merienda, materiales y herramientas.
                    </p>
                    <p className="text-md mt-4">
                      📝 <strong>Qué aprenderás:</strong>
                    </p>
                    <ul className="list-disc list-inside text-left mx-auto w-10/12">
                      <li>Armar un ramo en espiral</li>
                      <li>Crear arreglos en floreros</li>
                      <li>Tips para limpiar y conservar flores</li>
                    </ul>
                    <p className="text-md mt-4">
                      <span className="text-2xl">⏳</span> Duración: 2.5 - 3
                      horas
                    </p>
                    <p className="text-md mt-4">
                      Reserva con el 50% del valor y paga el resto una semana
                      antes del evento.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="text-center mt-5">
                  <Button
                    size="lg"
                    className="text-xl"
                    onClick={() => push("https://walink.co/4b9b27")}
                  >
                    ¡Reserva tu lugar ahora!
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div> */}
        </div>
        <div className="flex justify-center">
          <Button
            className="my-5 text-xl"
            size="lg"
            onClick={() => push("https://walink.co/e61bd2")}
          >
            Más Información
          </Button>
        </div>
        <div className="flex justify-center">
          <img
            src="/workshop.jpg"
            className="w-10/12 md:w-5/12 md:mt-10  mt-5 rounded-xl"
          />
        </div>
      </section>

      <section>
        <p className="text-center font-bold text-4xl md:text-7xl text-pink-950 mt-10">
          Nuestros puntos de PickUp
        </p>
        <ScrollArea className="w-screen whitespace-nowrap rounded-md ">
          <div className="flex">
            <div className="flex justify-center">
              <Card className="p-3 w-11/12 mt-5">
                <CardTitle className="text-center">Cream & Cream</CardTitle>
                <CardContent>
                  <div className="flex justify-center mt-5">
                    <img src="/crema.jpg" className="w-10/12  rounded-xl" />
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-md">
                    <span className="text-2xl">📍</span> Gral. Las Heras 394,
                    Monte Grande.
                  </p>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Card className="p-3 w-11/12 mt-5">
                <CardTitle className="text-center">Isolina</CardTitle>
                <CardContent>
                  <div className="flex justify-center mt-5">
                    <img src="/isolina.jpg" className="w-10/12  rounded-xl" />
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-md">
                    <span className="text-2xl">📍</span> Eugenio Rebizo 681,
                    Monte Grande.{" "}
                  </p>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Card className="p-3 w-11/12 mt-5">
                <CardTitle className="text-center">HomeQueen</CardTitle>
                <CardContent>
                  <div className="flex justify-center mt-5">
                    <img src="/homequeen.jpg" className="w-10/12 rounded-xl" />
                  </div>
                </CardContent>
                <CardFooter>
                  {" "}
                  <p className="text-md">
                    <span className="text-2xl">📍</span> Leandro Alem 1298 Monte
                    grande
                  </p>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Card className="p-3 w-11/12 mt-5">
                <CardTitle className="text-center">De Ollas y Sueños</CardTitle>
                <CardContent>
                  <div className="flex justify-center mt-5">
                    <img src="/deollas.jpg" className="w-10/12 rounded-xl" />
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-md">
                    <span className="text-2xl">📍</span> Gral. Las Heras 525,
                    Monte Grande.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-start items-center flex-col">
          <p className="font-geist md:text-6xl text-pink-950   text-center mt-10 font-bold text-4xl tracking-tighter">
            Suscripciones de flores
          </p>
          <Button
            className="mt-5 bg-[#fefae0] text-black border border-black font-bold hover:bg-yellow-200 transition-all"
            size="lg"
            onClick={() => push("https://walink.co/e61bd2")}
          >
            {" "}
            Más información
          </Button>
          <img
            src="/suscripcion.webp"
            className="w-10/12  md:w-5/12 my-5 rounded-xl "
          />
        </div>
        <div className="flex justify-start items-center flex-col">
          <p className="font-geist md:text-6xl text-pink-950   text-center mt-10 font-bold text-4xl tracking-tighter">
            Orquidias
          </p>
          <Button
            className="mt-5 bg-[#fefae0] text-black border border-black font-bold hover:bg-yellow-200 transition-all"
            size="lg"
          >
            {" "}
            Pedí la tuya
          </Button>
          <div className="w-full flex justify-center mt-10   border-xl ">
            {/* <EmblaCarousel
              images={[
                "/plantas1.webp",
                "/plantas2.webp",
                "/plantas3.webp",
                "/plantas4.webp",
                "/plantas5.webp",
              ]}
              heigh={"60vh"}
            /> */}

            <Carousel className="w-8/12 md:w-5/12  ">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <img src="/plantas1.webp" className="rounded-xl" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <img src="/plantas2.webp" className=" rounded-xl" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <img src="/plantas3.webp" className="  rounded-xl" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <img src="/plantas4.webp" className="  rounded-xl" />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
      <section>
        <p className="font-geist md:text-7xl text-pink-950   text-center mt-10 font-bold text-4xl tracking-tighter">
          Ramos de estación
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {products
            .filter((r) => r.category == "estacion")
            .map((e, index) => (
              <CardProduct key={index} product={e} />
            ))}
        </div>
      </section>
      <section>
        <p className="font-geist md:text-7xl text-pink-950   text-center mt-10 font-bold text-4xl tracking-tighter">
          {" "}
          Ramos Premium
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4">
          {products
            .filter((r) => r.category == "premium")
            .map((e, index) => (
              <CardProduct key={index} product={e} />
            ))}
        </div>
      </section>
      <section>
        <p className="font-geist md:text-7xl text-pink-950   text-center mt-10 font-bold text-4xl tracking-tighter">
          {" "}
          Ramos de Rosas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {products
            .filter((r) => r.category == "rosas")
            .map((e, index) => (
              <CardProduct key={index} product={e} />
            ))}
        </div>
      </section>
      <section>
        <p className="font-geist md:text-7xl text-pink-950   text-center mt-10 font-bold text-4xl tracking-tighter">
          {" "}
          Nuestros Box
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {products
            .filter((r) => r.category == "boxes")
            .map((e, index) => (
              <CardProduct key={index} product={e} />
            ))}
        </div>
      </section>
      <section>
        <p className="font-geist md:text-7xl text-pink-950    text-center mt-10 font-bold text-4xl tracking-tighter">
          Ramos aniversario
        </p>
        <div className="flex justify-center">
          <Button
            className="my-5 bg-[#fefae0] text-black border border-black font-bold hover:bg-yellow-200 transition-all"
            size="lg"
            onClick={() => push("https://walink.co/e61bd2")}
          >
            {" "}
            Consulta por el tuyo
          </Button>
        </div>
        <EmblaCarousel
          images={["/ani1.webp", "/ani2.webp", "/ani3.webp", "/ani4.webp"]}
          heigh={"60vh"}
        />
      </section>
    </div>
  );
}
