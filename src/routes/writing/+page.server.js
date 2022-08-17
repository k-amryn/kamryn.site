/** @type {import('./$types').PageLoad} */
export async function load() {
    const imports = import.meta.glob("$lib/posts/*.md")
    const names = Object.keys(imports)
    let pages = []
    for (let i = 0; i < names.length; i++) {
        const page = imports[names[i]]
        const p = await page()
        pages.push({...p.metadata, link: names[i].slice(names[i].lastIndexOf('/'), -3)})
    }
    return {'content': pages}
}