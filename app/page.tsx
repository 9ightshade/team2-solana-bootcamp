import { WalletConnect } from "@/components/wallet/WalletConnect";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <WalletConnect />
      <h1 className="text-3xl font-bold text-gray-800">Welcome to CropChain 🌾</h1>
      <p className="text-gray-600 mt-2 max-w-md">
        Protect your farm using Solana blockchain insurance. Quick, low-cost, and transparent.
      </p>
      <Link href="/dashboard" className="mt-4 inline-block bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600">
        Go to Dashboard
      </Link>
    </main>
  );
}
