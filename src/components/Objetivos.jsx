import React from "react";
const perks = [
  {
    name: "",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
    description:
      "El participante identificará los fundamentos legales, y los requisitos documentales para solicitar la Autorización para la prestación del servicio de Recolección y Transporte de Residuos de Manejo Especial del Sector Hidrocarburos.",
  },
  {
    name: "",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg",
    description:
      "El participante entenderá la responsabilidad relacionada con las actividades de Recolección y Transporte de Residuos de Manejo Especial del Sector Hidrocarburos.",
  },
  {
    name: "",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg",
    description:
      "El participante conocerá la estructura de una Autorización de Recolección y Transporte de Residuos de Manejo Especial del Sector Hidrocarburos.",
  },
  {
    name: "",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "El participante conocerá los aspectos necesarios para la presentación del informe anual del cumplimiento de los Términos y Condicionantes.",
  },
];

export const Objetivos = () => {
  return (
    <div>
      <div className="bg-gray-50">
        <h2 className="sr-only">Our perks</h2>
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <p className="text-center pb-10 text-3xl font-bold tracking-tight text-black sm:text-4xl"> Objetivos del curso </p>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-12 gap-x-8 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {perks.map((perk) => (
              <div key={perk.name} className="sm:flex">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img className="h-24 w-28" src={perk.imageSrc} alt="" />
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <h3 className="text-sm font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
