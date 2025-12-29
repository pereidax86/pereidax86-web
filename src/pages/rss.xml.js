import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const blog = await getCollection('blog');
    return rss({
        title: 'Blog de Luis Pereida',
        description: 'Artículos sobre Linux, Ciberseguridad y Tecnología.',
        site: context.site ?? 'https://pereidax86.com',
        items: blog
            .filter((post) => !post.data.draft)
            .map((post) => ({
                title: post.data.title,
                pubDate: post.data.pubDate,
                description: post.data.description,
                link: `/blog/${post.slug}/`,
            })),
    });
}
