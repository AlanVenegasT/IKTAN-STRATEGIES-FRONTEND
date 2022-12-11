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

export const Faqs13 = () => {
  return (
    <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Modalidad: Curso Presencial/Virtual.
            </h2>
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Temario
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                          <span className="font-medium text-gray-900">
                          Módulo 1. Aspectos Generales
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
                          <li> Contexto internacional. </li>
                          <li> Modelo Regulatorio de la ASEA.</li>
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
                          Módulo 2. Lineamientos de la ASEA
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
                          <li> Estructura. </li>
                          <li> Gestiones.</li>
                          <li> Equipo Multidisciplinario. </li>
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
                          Módulo 3. Detección y Cuantificación de Fugas
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
                          <li> Métodos Indirectos. </li>
                          <li> Tecnología OGI. </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

              ))}
               <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
               Duración: 16 horas
            </h2>

            </dl>
          </div>
        </div>
      </div>

  )
}
