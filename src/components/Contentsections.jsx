import React from 'react'
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export const Contentsections = () => {
  return (
    <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2"></div>
          </div>
          <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="lg:col-start-2 lg:pl-8">
              <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
                <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  Autorización para Recolección y Transporte de Residuos de
                  Manejo Especial
                </h3>
                <p className="mt-8 text-lg text-gray-500">
                  La Gestión de Residuos debe realizarse con apego a los
                  principios de valorización, responsabilidad compartida y
                  manejo integral, particularmente el manejo de los Residuos
                  Peligrosos debe realizarse conforme la Ley General para la
                  Prevención y Gestión Integral de Residuos (LGPGIR) y su
                  Reglamento (RLGPGIR), regulación en la cual se dan las
                  especificaciones necesarias para prevenir y controlar la
                  contaminación del medio ambiente y la protección de la salud
                  humana, así como evitar riesgos a la salud y daños a los
                  ecosistemas.
                </p>
                
                
              </div>
            </div>
          </div>
        </div>
  )
}
