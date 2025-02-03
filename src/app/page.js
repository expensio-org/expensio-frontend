import Header from "@/components/Header";
import HeroSection from "@/components/landingPage/HeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// export default function Home() {
//   return (

//     <div className="min-h-screen bg-gradient-to-r from-[#09001a] to-[#2d008d]">
//       <Header />
//     </div>
//   );
// }

// app/dashboard/layout.tsx
// export default function Home({ children }: { children: React.ReactNode }) {
export default function Home({ children }) {
  return (
    <div className="flex min-h-screen ">
      <HeroSection />
    </div>
  );
}

