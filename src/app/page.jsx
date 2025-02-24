import { notFound } from 'next/navigation';
import { Hero } from '../components/Hero.jsx';
import { Stats } from '../components/Stats.jsx';
import { getPageFromSlug } from '../utils/content.js';

const componentMap = {
  hero: Hero,
  stats: Stats,
};

export default async function ComposablePage() {
  try {
    const page = await getPageFromSlug("/");

    // 🔹 Debugging Log
    console.log("Loaded page data:", page);

    if (!page) {
      console.error("Page data is null or undefined.");
      return <div>Page not found</div>;
    }

    return (
      <div data-sb-object-id={page.id}>
        
        {/* 🔹 Check if sections exist before mapping */}
        {Array.isArray(page.sections) && page.sections.length > 0 ? (
          page.sections.map((section, idx) => {
            const Component = componentMap[section.type];
            return Component ? <Component key={idx} {...section} /> : null;
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
