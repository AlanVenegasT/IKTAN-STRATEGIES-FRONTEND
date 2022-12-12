import React from 'react'

import { CameraIcon } from '@heroicons/react/20/solid'

export const Seccionend = () => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Gestión Física</h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="https://iktanstrategies.com/wp-content/uploads/2021/04/Imagen-servicio.png"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
               {/* <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </figcaption> Agrega una figura muy pequeña por defauld*/}     
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-gray-500 text-justify">
              Nuestro servicio de Gestión Física en la CDMX ayuda a nuestros clientes a cumplir con sus medidas de prevención de contagios de COVID-19, brindando una opción para evitar el desplazamiento a la CDMX para la entrega de información 
              física en oficialía de partes. Existen muchas razones para utilizar nuestro servicio de Gestión Física:
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              
              <ul className=" list-inside text-base text-gray-500 list-disc">
                <li>Evita vuelos innecesarios.</li>
                <li>Ahorra en hospedaje y viáticos.</li>
                <li>Ahorra tiempo.</li>
                <li>Check and Double-Check para entrega de expedientes.</li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
