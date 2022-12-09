
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Disclosure } from "@headlessui/react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowUturnLeftIcon,
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
  DocumentChartBarIcon,
  HeartIcon,
  InboxIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Faqs } from "../components/Faqs";
import { Seccionimg } from "../components/Seccionimg";
import CTAsplitimg from "../components/CTAsplitimg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Gestionregulatoria() {
  return (
    <div className="bg-white">
      <main>
        {/* Stats section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                  alt="People working on laptops"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 className="text-base font-semibold">
                <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent text-3xl">
                  Una gestión inteligente...
                </span>
              </h2>
              <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                Gestion Regulatoria
              </p>
              <p className="mt-5 text-lg text-gray-300">
                Los Contratos de E&E conllevan el cumplimiento con múltiples
                autoridades en alguna de las 400 diferentes posibles gestiones
                (Autorizaciones, Permisos, Informes, Avisos, Reportes, etc.)
                derivadas de la regulación vigente.
              </p>
              <p className="mt-5 text-lg text-gray-300">
                Ayudamos a nuestros clientes a obtener la resolución favorable
                de trámites del Sector Energía (ASEA, CNH, etc.). Contamos con
                procesos legal y técnicamente robustos, refinados a través de
                una amplia experiencia en los procesos de gestión de los
                Reguladores del Sector.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Faqs */}
    <div>

      <Faqs/>
          
    </div>

    {/* Seccionimg */}
    <div>

      <Seccionimg/>
          
    </div>
    

    <CTAsplitimg />

    </div>
  );
}
