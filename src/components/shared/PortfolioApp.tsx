"use client";

import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import Research from "@/pages/Research";
import Contact from "@/pages/Contact";
import StructuredData from "@/components/seo/StructuredData";
import { useScrollRouting } from "@/hooks/useScrollRouting";
import { personSchema, websiteSchema, organizationSchema } from "@/lib/structuredData";

export default function PortfolioApp() {
  // Initialize the scroll routing hook
  useScrollRouting();

  return (
    <>
      <StructuredData data={personSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={organizationSchema} />
      <Layout>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="research">
          <Research />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Layout>
    </>
  );
}