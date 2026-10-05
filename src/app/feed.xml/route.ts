import { Feed } from 'feed'

import { getAllArticles } from '@/lib/articles'

export const dynamic = 'force-static'

export async function GET() {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'Celine Fabry',
    email: 'contact@celine.im',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Writing about things I like, mostly tech, a little bit of code and other fun stuffs such as arcade games, EVs and music.',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  for (let article of await getAllArticles()) {
    let publicUrl = `${siteUrl}/blog/${article.slug}`

    feed.addItem({
      title: article.title,
      id: publicUrl,
      link: publicUrl,
      description: article.description,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
    },
  })
}
