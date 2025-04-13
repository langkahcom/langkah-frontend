import { HeroSection } from '@/components/HeroSection';
import { PromptSection } from '@/components/PromptSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PromptSection />
    </main>
  );
}
