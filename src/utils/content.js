import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content/pages');

export async function getPagePaths() {
    try {
        const files = fs.readdirSync(contentDir);
        return files.map((file) => `/${file.replace('.json', '')}`);
    } catch (error) {
        console.error("Error loading page paths:", error.message);
        return [];
    }
}

export async function getPageFromSlug(slug) {
    try {
        // Normalize slug: If "/", use "home"
        const normalizedSlug = slug === "/" ? "home" : slug.replace("/", "");
        const filePath = path.join(contentDir, `${normalizedSlug}.json`);

        if (!fs.existsSync(filePath)) {
            throw new Error(`Page not found for slug: ${slug}`);
        }

        const content = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(content);
    } catch (error) {
        console.error("Error loading page:", error.message);
        return null;
    }
}
