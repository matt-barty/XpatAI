interface PhantomProvider {
  solana?: {
    connect(): Promise<{ publicKey: { toString(): string } }>;
    disconnect(): Promise<void>;
    on(event: string, callback: () => void): void;
    isPhantom?: boolean;
  };
}

interface Window {
  phantom?: PhantomProvider;
}
