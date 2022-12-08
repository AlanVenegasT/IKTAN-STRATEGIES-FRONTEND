import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'


const faqs = [
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  

export const Faqs = () => {
  return (

    <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Gestiones ante la ASEA:
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                          <span className="font-medium text-gray-900">
                          Exploración y Extracción
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <ul className=" list-inside text-base text-gray-500 list-disc">
                          <li> Dictámenes Técnicos de Ingeniería </li>
                          <li> Dictamenes Técnicos de ARP</li>
                          <li> Justificaciones Técnicas Normativas </li>
                          <li> Reportes de Cumplimiento </li>
                          <li> Presentación de Avisos </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                          <span className="font-medium text-gray-900">
                          Sistemas de Administración
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <ul className=" list-inside text-base text-gray-500 list-disc">
                          <li> Implementación de SASISOPA </li>
                          <li> Opinión Calificada de Ingeniería</li>
                          <li> Opinión Caificada de ARP </li>
                          <li> Informes Semestrales </li>
                          <li> Reportes Anuales </li>
                          <li> Auditorías Internas y Externas </li>
                          <li> Informes de Auditoría </li>
                          <li> Cumplimiento de Resuelves </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                          <span className="font-medium text-gray-900">
                          Seguros y Garantias Financieras
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <ul className=" list-inside text-base text-gray-500 list-disc">
                          <li> Registro de Pólizas </li>
                          <li> Renovación de Pólizas</li>
                          <li> Estudios de PML </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

              ))}
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                          <span className="font-medium text-gray-900">
                          Protección Ambiental
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <ul className=" list-inside text-base text-gray-500 list-disc">
                          <li> Línea Base Ambiental </li>
                          <li> Impacto Ambiental (MIA)</li>
                          <li> Modificaciones MIA </li>
                          <li> Informes Preventios </li>
                          <li> Estudios de Riesgo Ambiental </li>
                          <li> ETE </li>
                          <li> Avisos </li>
                          <li> Términos y Condicionantes </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> 
              ))}
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                          <span className="font-medium text-gray-900">
                          Residuos
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <ul className=" list-inside text-base text-gray-500 list-disc">
                          <li> Registro de Generador de Residuos Peligrosos </li>
                          <li> Registro de Generador de Residuos de Manejo Especial</li>
                          <li> Planes de Manejo de Residuos </li>
                          <li> Modificación de autorizaciones </li>
                          <li> Informes </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}

            </dl>
          </div>
        </div>
      </div>


  )
}
