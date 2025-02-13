"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";

type PhantomSolana = NonNullable<PhantomProvider["solana"]>;

export default function Web3Button() {
  const [phantom, setPhantom] = useState<PhantomSolana | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const provider = window.phantom?.solana;
      setPhantom(provider ?? null);

      // Listen for wallet connection changes
      provider?.on("connect", () => setConnected(true));
      provider?.on("disconnect", () => setConnected(false));
    }
  }, []);

  const connectWallet = async () => {
    try {
      if (phantom) {
        const { publicKey } = await phantom.connect();
        setConnected(true);
        console.log("Connected with public key:", publicKey.toString());
      } else {
        window.open("https://phantom.app/", "_blank");
      }
    } catch (error) {
      console.error("Error connecting to Phantom wallet:", error);
      setConnected(false);
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
