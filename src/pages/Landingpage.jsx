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
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Herosecction from "../components/Herosecction";
import { Seccionend } from "../components/Seccionend";
import { Carrusel } from "../components/Carrusel";
import { Contentsections } from "../components/Contentsections";
import { Objetivos } from "../components/Objetivos";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Landingpage() {
  return (
    <div className="bg-white ">
      <main >
        
      <div>
          <Herosecction />
        </div>

        <div>
          <Contentsections />
        </div>

        

        <div >
        <Carrusel />
        </div>
        
        <div>
        <Objetivos />
        </div>
       



        <div>
          <Seccionend />
        </div>
      </main>
    </div>
  );
}
