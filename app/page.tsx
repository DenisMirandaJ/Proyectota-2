import { Footer } from "@/components/footer";
import FarewellNoteSection from "@/components/farewell-note-section";
import { HeroSection } from "@/components/hero-section";
import MediaSection from "@/components/media-section";
import MessagesSection from "@/components/messages-section";
import ScreenshotsSection from "@/components/screenshots-section";
import { Separator } from "@/components/separator";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Separator />
      <FarewellNoteSection />
      <Separator />
      <MediaSection />
      <Separator />
      <ScreenshotsSection />
      <Separator />
      <MessagesSection />
      <Separator />
      <Footer />
    </main>
  );
}
