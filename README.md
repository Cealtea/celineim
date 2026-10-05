# My personal website

I am using a customized version of Spotlight.
Spotlight is a [Tailwind UI](https://tailwindui.com) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

If you don't nvm to handle all version of node.
Please install it.

For MacOS

```bash
brew update
brew install nvm
```

Select Node 16.x

```bash
nvm use lts/gallium
```

Run

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Production

The site is built as a static export (`out/`) and served by a Cloudflare Worker using
[Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) (see `wrangler.jsonc`).

Preview the production build locally:

```bash
npm run preview
```

Pushes to `main` are deployed automatically by Cloudflare (build command `npm run build`, deploy command `npx wrangler deploy`).

Note: Workers limits each asset to 25 MiB, so files larger than that are listed in `public/.assetsignore`.
