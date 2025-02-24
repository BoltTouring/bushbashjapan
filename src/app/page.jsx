import { notFound } from 'next/navigation';
import { Hero } from '../components/Hero.jsx';
import { TextSection } from '../components/TextSection.jsx';
import { Schedule } from '../components/Schedule.jsx';
import { ContactForm } from '../components/ContactForm.jsx';
import { getPageFromSlug } from '../utils/content.js';

// Mapping section types to components
const componentMap = {
  hero: Hero,
  text: TextSection,
  schedule: Schedule,
  "contact-form": ContactForm
};

export default async function ComposablePage() {
  try {
    // Fetch page data
    const page = await getPageFromSlug("/");

    // Debugging log
    console.log("Loaded page data:", page);

    if (!page) {
      console.error("Page data is null or undefined.");
      return notFound();
    }

    return (
      <div data-sb-object-id={page.id}>
        {Array.isArray(page.sections) && page.sections.length > 0 ? (
          page.sections.map((section, idx) => {
            const Component = componentMap[section.type];

            if (!Component) {
              console.warn(`No component found for section type: ${section.type}`);
              return null;
            }

            return <Component key={idx} {...section} />;
          })
        ) : (
          <p>No sections to display</p>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error in ComposablePage:", error.message);
    return <div>Something went wrong.</div>;
  }
}

