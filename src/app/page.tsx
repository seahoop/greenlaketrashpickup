import { LandingPage } from "../components/landing-page";
import { buildFaqSchema } from "../lib/site";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema()) }}
      />
      <LandingPage />
    </>
  );
}
