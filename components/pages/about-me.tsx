"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Mail } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import imageProfile from "@/app/assets/images/micael_profile.jpg"
import backgroundImage from "@/app/assets/images/bgwide.jpg" 
import Image from "next/image"
import { useEffect, useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    "Abertura de MEI",
    "Acompanhamento mensal MEI e assessoria",
    "Encerramento e regularização de situação do MEI",
    "Contabilidade para Pessoa Física",
    "Carnê leão",
  ]

  const professionals = [
    "Médicos", "Dentistas", "Fisioterapeutas", "Arquitetos",
    "Engenheiros", "Programadores", "Outros profissionais autônomos"
  ]

  return (
    <div className="relative flex flex-col min-h-screen">
      <div id="about-me" className="flex-grow text-white flex flex-col md:flex-row items-center justify-center relative">
        {/* Background for md and larger screens */}
        {mounted && (
          <div className="hidden md:block absolute inset-0">
            <Image
              src={backgroundImage}
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div className="absolute inset-0 bg-black/10 z-10"></div>
          </div>
        )}

        {/* Background for mobile screens */}
        <div className="md:hidden absolute inset-0">
          <Image
            src={imageProfile}
            alt="Micael Henrique Santos Pereira"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-end md:justify-center w-full h-full">
          <div className="md:w-1/2 mb-8 md:mb-0 flex items-center justify-center">
            {/* This div is intentionally left empty for layout purposes */}
          </div>
          <div className="md:w-1/2 md:pl-8 space-y-6 p-4 md:p-8 mt-96 md:mt-0 bg-gradient-to-b from-transparent to-zinc-950 rounded-md">
            <h1 className="text-4xl font-bold">Micael Henrique Santos Pereira</h1>
            <p className="text-gray-300">
              Sou Micael, tenho 23 anos e sou formado em contabilidade pela Universidade Estadual da Bahia
              (UNEB). Atualmente, trabalho como contador em uma empresa de gestão do agronegócio, atuando como
              consultor e, também, atuo atendendo e ajudando empresários, ajudando-os a crescer e descomplicar sua
              vida tributária!
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="services">
                <AccordionTrigger className="font-semibold text-lg hover:no-underline [&>svg]:h-8 [&>svg]:w-8">
                  Serviços Oferecidos
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-base">
                    {services.map((service, index) => (
                      <li key={index} className="text-gray-300">{service}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="professionals">
                <AccordionTrigger className="font-semibold text-lg hover:no-underline [&>svg]:h-8 [&>svg]:w-8">
                  Assessoria para Autônomos
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside grid grid-cols-2 gap-2 text-base">
                    {professionals.map((professional, index) => (
                      <li key={index} className="text-gray-300">{professional}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
           
            {
               /*
                eu imagino que micael tenha todos os tipos de clientes e talvez  isso possa ajudar mas deixarei sem 

                 <div>
                  <h2 className="text-xl font-semibold mb-2">Meus contatos:</h2>
                  <p>(77) 98118-3262</p>
                  <p>micaelhenriquesp@gmail.com</p>
                 </div>
               */
            }

            <div className="flex space-x-4 w-full justify-center">
              <a aria-label="link para o instagram" href="https://www.instagram.com/micaelcontador" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a   aria-label="link para o whatsapp" href="https://wa.me/qr/RFK3QKONWXDRE1" className="text-gray-300 hover:text-white transition-colors">
                <FaWhatsapp size={24} />
              </a>
              <a  aria-label="link para o linkedin" href="https://www.linkedin.com/in/micaelhenriquesp/" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a  aria-label="link para o email" href="mailto:micaelhenriquesp@gmail.com">
                <Mail size={24}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="relative z-20 w-full bg-zinc-950 py-1">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Desenvolvido por{" "}
              <a 
                href="https://aureliodeboa.github.io/Portfolio/" 
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aurelio Ribeiro
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}