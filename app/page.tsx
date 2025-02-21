"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import DarkFeatures from "@/components/dark-features";
import Stats from "@/components/stats";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import BlobCursor from "@/components/Blob";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";
import { Globe } from "@/components/magicui/globe";
import Image from "next/image";

const FloatingGlobe = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: mousePosition.y + Math.sin(Date.now() / 1000) * 20,
        x: mousePosition.x,
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        x: { duration: 0.2, ease: "linear" },
        y: { duration: 0.2, ease: "linear" },
      }}
      className="absolute w-[800px] h-[800px] opacity-30"
    >
      <Globe />
    </motion.div>
  );
};

const GlowingOrb = ({
  color,
  delay,
  depth = 1,
}: {
  color: string;
  delay: number;
  depth?: number;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / (70 / depth),
        y: (e.clientY - window.innerHeight / 2) / (70 / depth),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [depth]);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.15, 0.4, 0.15],
        rotate: [0, 180, 360],
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
        x: { duration: 0.2, ease: "linear" },
        y: { duration: 0.2, ease: "linear" },
      }}
      className={`absolute w-[400px] h-[400px] rounded-full blur-[100px] mix-blend-screen ${color}`}
    />
  );
};

const ParticleEffect = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    setIsClient(true);

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isClient) return null;

  const particles = Array.from({ length: 50 }).map((_, i) => ({
    size: Math.random() * 3,
    depth: Math.random(),
    speed: 3 + Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            particle.depth < 0.3
              ? "bg-purple-500/20"
              : particle.depth < 0.6
              ? "bg-sky-500/30"
              : "bg-blue-500/40"
          }`}
          style={{
            width: particle.size,
            height: particle.size,
          }}
          initial={{
            opacity: 0,
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: [0, 2, 0],
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const globeRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6000); // Extended duration for more impact

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showIntro) {
      setShowContent(true);
    }
  }, [showIntro]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        duration: 1,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const glowVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.5, 0.2],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-black overflow-hidden"
          >
            {/* Background Effects */}
            <ParticleEffect />
            <div className="absolute inset-0 flex items-center justify-center">
              <FloatingGlobe />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <GlowingOrb color="bg-sky-500" delay={0} depth={1.5} />
              <GlowingOrb color="bg-purple-500" delay={1.5} depth={2} />
              <GlowingOrb color="bg-indigo-500" delay={3} depth={2.5} />
            </div>

            {/* Main Content */}
            <motion.div
              className="relative h-full flex items-center justify-center"
              animate={{
                x: mousePosition.x * -0.2,
                y: mousePosition.y * -0.2,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1,
              }}
            >
              <div className="text-center z-10">
                {/* Title Animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="relative"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.5,
                      delay: 0.5,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                    className="text-[8rem] md:text-[12rem] font-bold tracking-tighter font-cal"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-white to-purple-500 [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">
                      XpatAI
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 1.5,
                      delay: 1,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                    className="h-[1px] w-[120%] -ml-[10%] bg-gradient-to-r from-transparent via-white/20 to-transparent absolute top-1/2 -translate-y-1/2"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.5,
                      delay: 1.2,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                    className="mt-8 md:mt-12"
                  >
                    <span className="text-3xl md:text-4xl text-white/80 tracking-widest font-light uppercase">
                      The Future of Global Mobility
                    </span>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.5,
                    delay: 2,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="mt-16 md:mt-20 space-y-6"
                >
                  <motion.div
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-base md:text-lg tracking-wider text-sky-400/80 font-light"
                  >
                    AI-Powered Oracle Predicting Human Migration
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="text-sm tracking-widest text-white/40 uppercase"
                  >
                    Beta Access Opening Soon
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: showContent ? 1 : 0,
          scale: showContent ? 1 : 0.95,
          filter: showContent ? "blur(0px)" : "blur(10px)",
        }}
        transition={{
          duration: 1.2,
          ease: [0.19, 1, 0.22, 1],
          delay: 0.2,
        }}
      >
        <BlobCursor fillColor="#0ea5e9" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M20 20l-4-4 4 4-4 4 4-4 4 4-4-4 4-4-4 4z' stroke='%23FAD3D1' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
            opacity: 0.5,
          }}
        />
        <Header />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: showContent ? 1 : 0,
            y: showContent ? 0 : 20,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.19, 1, 0.22, 1],
          }}
        >
          <Hero />

          {/* Video Demo Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="py-24 bg-gradient-to-b from-white to-gray-50"
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  See XpatAI in Action
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Watch how our AI-powered platform helps you explore and
                  understand different countries
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/hackathon.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                </div>
              </div>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Features />
            <DarkFeatures />
            <Stats />
            <Newsletter />
          </motion.div>
        </motion.main>
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Footer />
        </motion.footer>
      </motion.div>
    </div>
  );
}
