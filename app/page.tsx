"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Linkedin, Mail, Scale, User } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 flex-col">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Card className="w-full max-w-md p-6 bg-gradient-to-t from-black to-gray-800 backdrop-blur-md rounded-xl shadow-xl border border-gray-700">
          <motion.div className="flex flex-col items-center space-y-4" variants={containerVariants}>
            <motion.div 
              className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg"
              variants={itemVariants}
            >
              <Image
                src="/placeholder.svg"
                alt="Micael Henrique"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
            <motion.h1 className="text-2xl font-bold text-white" variants={itemVariants}>Micael Henrique</motion.h1>
            <motion.h2 className="text-xl text-gray-300" variants={itemVariants}>Contador</motion.h2>
            <motion.p className="text-center text-gray-400 mb-4" variants={itemVariants}>
              Entre em contato clicando no botão abaixo e me deixe descomplicar sua vida tributária!
            </motion.p>
            <div className="grid gap-4 w-full">
              {[
                { icon: Instagram, text: "Meu perfil no Instagram" },
                { icon: User, text: "Sobre mim" },
                { icon: Linkedin, text: "Meu perfil profissional" },
                { icon: Mail, text: "Entre em contato!" }
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                >
                  <AnimatedButton 
                    variant="outline" 
                    className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white border-gray-600 relative overflow-hidden"
                    whileHover="hover"
                    initial="initial"
                    animate="animate"
                  >
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-white/5 to-white/40"
                      initial={{ width: 0 }}
                      variants={{
                        hover: { width: "100%" }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center">
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
        className="text-white mt-2"
        variants={footerVariants}
        initial="hidden"
        animate="visible"
      >
        <a href="https://aureliodeboa.github.io/Portfolio/" className="hover:text-gray-300 transition-colors">
          Desenvolvido por Aurelio Ribeiro
        </a>
      </motion.footer>
    </div>
  )
}