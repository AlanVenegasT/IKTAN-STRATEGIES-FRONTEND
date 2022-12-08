import React from 'react'

export const Seccionend = () => {
  return (
    <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
          <div className="absolute inset-0 overflow-hidden ">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-900 bg-opacity-50"
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Gestión Física
            </h2>
            <p className="mt-3 text-xl text-white">
              Nuestro servicio de Gestión Física en la CDMX ayuda a nuestros
              clientes a cumplir con sus medidas de prevención de contagios de
              COVID-19, brindando una opción para evitar el desplazamiento a la
              CDMX para la entrega de información física en oficialía de partes.
              Existen muchas razones para utilizar nuestro servicio de Gestión
              Física:
            </p>
            <ul className="list-inside mt-3 text-xl text-white list-disc">
              <li>Evita vuelos innecesarios. </li>

              <li>Ahorra en hospedaje y viáticos. </li>

              <li>Ahorra tiempo.</li>

              <li>Check and Double-Check para entrega de expedientes.</li>
            </ul>
          </div>
        </div>
  )
}
