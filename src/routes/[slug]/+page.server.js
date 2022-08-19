import { getPost } from '$lib/getposts.js'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    return getPost(params.slug)
}