# apple-clone

Responsive React homepage clone of the Apple store. Vite builds a static site that can be pushed to GitHub, deployed on Vercel, and reached through a Hostinger domain.

## How the page is built

The browser loads `index.html`. `src/main.jsx` mounts React. `App` keeps the header and footer on every page and routes with React Router. `/` is the homepage. Header items open `/mac`, `/iphone`, `/ipad`, `/watch`, `/tv`, `/music`, `/support`, and `/cart`. The search icon expands a field in the header; `/search` is the same search on its own page. On a narrow screen the footer directories collapse into rows and open one at a time.

```text
src/
  models/          navigation, footer, and search
  views/           layout, product bands, and pages
  controllers/     menu, search, and page wiring
  assets/images/   images imported by models and views
public/            favicon and the Hostinger route rule
```

A controller reads a model and passes it to a view. Views do not fetch data, and models do not render markup.

## Local development

```bash
npm install
npm run dev
```

Other scripts:

- `npm run build` — production build in `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — run Oxlint

## GitHub

Repository: [Mahmud-Hamda/apple-clone](https://github.com/Mahmud-Hamda/apple-clone)

Keep secrets out of the repository. `.gitignore` already excludes `.env` files, keys, certificates, credential JSON, `node_modules`, and the Vercel local folder `.vercel`.

```bash
git add .
git commit -m "Prepare apple-clone for deployment"
git push -u origin main
```

## Vercel

1. In Vercel, choose **Add New Project** and import this GitHub repository.
2. Vercel detects Vite. The build command is `npm run build` and the output directory is `dist` (`vercel.json` records the same settings).
3. Deploy. Later pushes to the connected branch deploy automatically.
4. The live site is [apple-clone-xi-lyart.vercel.app](https://apple-clone-xi-lyart.vercel.app/).

## Hostinger

Use Hostinger for the domain and keep the site on Vercel.

1. In the Vercel project, open **Settings → Domains** and add your Hostinger domain, including `www` if you use it.
2. Vercel shows the DNS records to create. In Hostinger, open **hPanel → Domains → DNS / Nameservers**.
3. Add the records Vercel lists. A typical setup is:
   - `A` record for `@` pointing at the address Vercel gives you
   - `CNAME` record for `www` pointing at `cname.vercel-dns.com`
4. Remove any old `A` or `CNAME` records for the same host that would conflict.
5. Wait for DNS to propagate, then confirm the domain shows as valid in Vercel.

To host the files on Hostinger instead of Vercel, run `npm run build` and upload the **contents** of `dist/` into `public_html` (the domain root, not a subfolder). `public/.htaccess` is copied into that build so addresses such as `/mac` still open the app. Do not upload `node_modules` or source files.

Do not put Hostinger, Vercel, or DNS tokens in the repository. Add them only in each service’s dashboard.
