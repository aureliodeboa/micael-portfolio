"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Linkedin, Mail, User } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import { motion } from "framer-motion"
import { Hero } from "@/components/pages/about-me"
import profile from "@/app/assets/images/profile02.jpg"
import backgroundImage from "@/app/assets/images/bg.jpg" 
import { useEffect, useCallback } from "react"

const AnimatedButton = motion(Button)

export default function LinksPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 1.5, 
        duration: 0.5
      }
    }
  }

  const smoothScroll = useCallback((target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  const handleButtonClick = useCallback((link: string, isInternal: boolean) => {
    if (isInternal) {
      smoothScroll(link);
    } else {
      window.open(link, '_blank');
    }
  }, [smoothScroll]);

  const buttons = [
    { icon: User, link: "#about-me", text: "Sobre mim", isInternal: true },
    { icon: Linkedin, link: "https://www.linkedin.com/in/micaelhenriquesp/", text: "Meu perfil profissional", isInternal: false },
    { icon: Instagram, link: "https://www.instagram.com/micaelcontador", text: "Meu perfil no Instagram", isInternal: false },
    { icon: FaWhatsapp, link: "https://wa.me/qr/RFK3QKONWXDRE1", text: "Meu Whatsapp", isInternal: false },
    { icon: Mail, link: "mailto:micaelhenriquesp@gmail.com", text: "Entre em contato!", isInternal: false }
  ];

  return (
    <section className="relative min-h-screen">
      {/* Background image with overlay */}
      <div className="fixed inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-80 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20">
        <div className="min-h-screen flex items-center justify-center p-4 flex-col">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <Card className="w-full max-w-lg p-6 bg-gradient-to-t from-black to-neutral-900 backdrop-blur-md rounded-xl shadow-xl border border-zinc-800">
              <motion.div className="flex flex-col items-center space-y-4" variants={containerVariants}>
                <motion.div 
                  className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg shadow-zinc-950"
                  variants={itemVariants}
                >
                  <Image
                    src={profile}
                    alt="Micael Henrique"
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
                <motion.h1 className="text-2xl font-bold text-white" variants={itemVariants}>Micael Henrique</motion.h1>
                <motion.h2 className="text-xl text-gray-100" variants={itemVariants}>Contador</motion.h2>
                <motion.p className="text-center text-gray-300 mb-4" variants={itemVariants}>
                  Entre em contato clicando no botão abaixo e me deixe descomplicar sua vida tributária!
                </motion.p>
                <div className="grid gap-4 w-full">
                  {buttons.map((item, index) => (
                    <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.1 }}>
                      <AnimatedButton 
                        variant="outline" 
                        className="w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 hover:from-zinc-900 text-white border-zinc-800 relative overflow-hidden"
                        whileHover="hover"
                        initial="initial"
                        animate="animate"
                        onClick={() => handleButtonClick(item.link, item.isInternal)}
                      >
                        <span className="relative z-10 flex items-center text-white justify-center">
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.text}
                        </span>
                      </AnimatedButton>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Card>
          </motion.div>
          <motion.footer 
            className="text-gray-500 mt-2"
            variants={footerVariants}
            initial="hidden"
            animate="visible"
          >
            Desenvolvido por <a href="https://aureliodeboa.github.io/Portfolio/" className="text-gray-500 font-semibold hover:text-violet-900 transition-colors">
              Aurelio Ribeiro
            </a>
          </motion.footer>
        </div>
        <div id="about-me">
          <Hero />
        </div>
      </div>
    </section>
  )
}