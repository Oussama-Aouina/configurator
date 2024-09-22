"use client";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [bad, setBad] = useState({
    Hintergrund: "/images/Bad/Hintergrund_Grundausstattung.png",
    Toilette: "/images/Bad/Toilette_Grundausstattung.png",
    WB_Armatur: "/images/Bad/WB_Armatur_Sonderausstattung.png",
    WB: "/images/Bad/WB_Grundausstattung.png",
    Druckplatte: "/images/Bad/Druckplatte_Sonderausstattung.png",
  });

  const items = [
    {
      name: "Hintergrund",
      options: [
        {
          name: "Grundausstattung",
          desc: "desc1",
          icon: "/icons/icon2.jpg",
          img: "/images/Bad/Hintergrund_Grundausstattung.png",
        },
        {
          name: "Sonderausstattung",
          desc: "desc1",
          icon: "/icons/icon.jpg",
          img: "/images/Bad/Hintergrund_Sonderausstattung.png",
        },
      ],
    },
    {
      name: "Toilette",
      options: [
        {
          name: "Grundausstattung",
          desc: "desc1",
          icon: "/icons/toilette.jpg",
          img: "/images/Bad/Toilette_Grundausstattung.png",
        },
        {
          name: "Sonderausstattung",
          desc: "desc1",
          icon: "/icons/toilette.jpg",
          img: "/images/Bad/Toilette_Sonderausstattung.png",
        },
      ],
    },
    {
      name: "WB_Armatur",
      options: [
        {
          name: "Grundausstattung",
          desc: "desc1",
          icon: "/icons/wcplate.png",
          img: "/images/Bad/WB_Armatur_Grundausstattung.png",
        },
        {
          name: "Sonderausstattung",
          desc: "desc1",
          icon: "/icons/wcplate.png",
          img: "/images/Bad/WB_Armatur_Sonderausstattung.png",
        },
      ],
    },
    {
      name: "WB",
      options: [
        {
          name: "Grundausstattung",
          desc: "desc1",
          icon: "/icons/icon2.jpg",
          img: "/images/Bad/WB_Grundausstattung.png",
        },
        {
          name: "Sonderausstattung",
          desc: "desc1",
          icon: "/icons/icon.jpg",
          img: "/images/Bad/WB_Sonderausstattung.png",
        },
      ],
    },
    {
      name: "Druckplatte",
      options: [
        {
          name: "Grundausstattung",
          desc: "desc1",
          icon: "/icons/wcplate.png",
          img: "/images/Bad/Druckplatte_Grundausstattung.png",
        },
        {
          name: "Sonderausstattung",
          desc: "desc1",
          icon: "/icons/wcplate.png",
          img: "/images/Bad/Druckplatte_Sonderausstattung.png",
        },
      ],
    },
  ];

  function changeImage(name, img) {
    setBad({
      ...bad,
      [name]: img,
    });
    console.log(bad);
  }

  return (
    <div className="">
      <div className="h-screen w-screen">
        <div className="flex h-full w-full">
          <div className="flex w-full flex-col">
            <div className="flex h-20 w-full items-center justify-center bg-slate-300">
              <h1 className="text-2xl font-bold">Preview</h1>
            </div>
            <div className="relative h-[90%] w-full">
              {/* Hintergrund */}
              <Image
                src={bad.Hintergrund}
                alt="sdf"
                fill
                className="object-contain lg:object-cover"
                quality={100}
              />
              {/* Toilette */}
              <Image
                src={bad.Toilette}
                alt="sdf"
                fill
                className="object-contain lg:object-cover"
                quality={100}
              />
              {/* WB_Armatur */}
              <Image
                src={bad.WB_Armatur}
                alt="sdf"
                fill
                className="object-contain lg:object-cover"
                quality={100}
              />
              {/* WB */}
              <Image
                src={bad.WB}
                alt="sdf"
                fill
                className="object-contain lg:object-cover"
                quality={100}
              />
              {/* Druckplatte */}
              <Image
                src={bad.Druckplatte}
                alt="sdf"
                fill
                className="object-contain lg:object-cover"
                quality={100}
              />
            </div>
          </div>
          <div className="flex w-[340px] flex-col bg-slate-200">
            <div className="flex h-20 w-full items-center justify-center bg-slate-200">
              <h1 className="text-2xl">Menu</h1>
            </div>
            <div className="flex h-full w-full flex-col items-stretch justify-start bg-slate-200 text-lg shadow-lg">
              <Accordion defaultIndex={[0]} allowMultiple>
                {items.map((item, index) => {
                  return (
                    <AccordionItem
                      key={index}
                      borderTop="1px solid"
                      borderBottom="1px solid"
                      borderColor="gray.500"
                    >
                      <h2>
                        <AccordionButton
                          w="100%"
                          _expanded={{ bg: "gray.300" }}
                        >
                          <Box
                            as="span"
                            flex="1"
                            width={"100%"}
                            justifyContent={"space-between"}
                            textAlign="left"
                          >
                            {item.name}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel p={0} w="100%">
                        <ul className="flex w-full flex-col items-center border">
                          {item.options.map((option, index) => {
                            return (
                              <li
                                onClick={() =>
                                  changeImage(item.name, option.img)
                                }
                                key={index}
                                className="flex w-full cursor-pointer items-start justify-start gap-6 p-3 hover:bg-slate-300"
                              >
                                <Image
                                  src={option.icon}
                                  alt={option.name}
                                  width={40}
                                  height={40}
                                />
                                <p>{option.name}</p>
                              </li>
                            );
                          })}
                        </ul>
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
