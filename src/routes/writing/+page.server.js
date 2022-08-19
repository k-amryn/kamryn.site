import { getPosts } from '$lib/getposts.js'

/** @type {import('./$types').PageLoad} */
export async function load() {
    return getPosts()
}