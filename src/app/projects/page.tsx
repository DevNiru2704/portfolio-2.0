import PortfolioApp from "@/components/shared/PortfolioApp";
import { projectsMetadata } from "@/lib/metadata";

export const metadata = projectsMetadata;

export default function ProjectsPage() {
  return <PortfolioApp />;
}