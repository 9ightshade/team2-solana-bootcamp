import { WalletConnect } from "@/components/wallet/WalletConnect";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <WalletConnect />
      <h2 className="text-xl font-semibold">Your Dashboard</h2>
      <p className="text-gray-600">Track active policies, claims, and crop data here.</p>
    </div>
  );
}
