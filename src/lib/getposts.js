
export async function getPosts() {
    const imports = import.meta.glob("$lib/posts/*.md")
    const paths = Object.keys(imports)
    let pages = []
    for (let i = 0; i < paths.length; i++) {
        const page = imports[paths[i]]
        const post = await page()

        let realTime = new Date(post.metadata.date)
        post.metadata.date = realTime.toISOString().slice(0, 10)
        post.metadata.link = paths[i].slice(paths[i].lastIndexOf('/'), -3)
        
        // only adding metadata because you would usually only need metadata
        // when getting the list of posts
        pages.push(post.metadata)
    }
    return {content: pages}
}

export async function getPost(title) {
    let post
    try {
        post = await import(`$lib/posts/${title}.md`)
    } catch(err) {
        return {content: "404"}
    }
    
    let realTime = new Date(post.metadata.date)
    post.metadata.date = `${realTime.toISOString().slice(0, 10)}`
    post.metadata.link = `/${title}`

    return {metadata: post.metadata, content: post.default.render().html}
}