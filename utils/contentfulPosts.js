const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
    space: space,
    accessToken: accessToken,
})

export async function fetchEntries() {
    const entries = await client.getEntries({
        'content_type': 'blogPost',
        order: '-sys.createdAt'//order descending by adding a -
    })
    // console.log(entries.rawData)
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchEntry(blogId) {
    const entry = await client.getEntry(blogId)
    if (entry) return entry
    console.log('Error retreiving entry')
}

export default { fetchEntries, fetchEntry }