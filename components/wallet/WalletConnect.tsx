// components/wallet/WalletConnect.tsx
"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const WalletConnect = () => (
  <div className="p-4 flex justify-end">
    <WalletMultiButton />
  </div>
);
