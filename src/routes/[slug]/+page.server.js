import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const pages = import.meta.glob(`$lib/posts/*.md`)

    if (pages[`/src/lib/posts/${params.slug}.md`]) {
        const page = await pages[`/src/lib/posts/${params.slug}.md`]()
        return {content: page.default.render().html}
    }
    
    throw error(404, "Page not found")
}