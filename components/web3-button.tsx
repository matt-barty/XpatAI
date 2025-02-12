"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Web3Button() {
  const [phantom, setPhantom] = useState<any>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (window.phantom?.solana) {
      setPhantom(window.phantom?.solana);
    }
  }, []);

  const connectWallet = async () => {
    try {
      if (phantom) {
        const { publicKey } = await phantom.connect();
        setConnected(true);
        // Here you can handle the successful connection
        console.log("Connected with public key:", publicKey.toString());
      } else {
        window.open("https://phantom.app/", "_blank");
      }
    } catch (error) {
      console.error("Error connecting to Phantom wallet:", error);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={connectWallet}
      className="w-full flex items-center justify-center gap-2 rounded-lg"
    >
      <Image
        src="/Phantom-Icon_Transparent_Purple.svg"
        alt="Phantom"
        width={20}
        height={20}
        className="h-5 w-5"
      />
      {phantom
        ? connected
          ? "Connected with Phantom"
          : "Continue with Phantom"
        : "Install Phantom Wallet"}
    </Button>
  );
}
