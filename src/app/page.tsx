import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { TechStack } from '@/components/TechStack';
import { DeveloperJourney } from '@/components/DeveloperJourney';
import { GitHubActivity } from '@/components/GitHubActivity';
import { Contact } from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <TechStack />
      <DeveloperJourney />
      <GitHubActivity />
      <Contact />
    </>
  );
}
