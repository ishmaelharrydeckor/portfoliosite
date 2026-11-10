import type { Metadata } from "next";
import ProjectsView from "./ProjectsView";

export const metadata: Metadata = {
  title: "Work",
  description: "Websites Ishmael Harry-Deckor has built for businesses and personal brands: live client sites, work in progress and concept builds.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
