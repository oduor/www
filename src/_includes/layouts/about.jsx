import filters from "../../../utils/filters.js"

export const data = {
  layout: 'layouts/base.jsx',
  templateClass: 'about',
  // Exclude from collections so it doesn't appear in post lists
  eleventyExcludeFromCollections: true
}

const { readableDate } = filters

function AboutHeader({ title }) {
  return (
    <h1 class='font-header'>{title}</h1>
  )
}

function BackLink() {
  return (
    <a href="/" class="back-link">← Back to home</a>
  )
}

export default function ({ content, title, page }) {
  const header = (
    <>
      <BackLink />
      <AboutHeader title={title} />
    </>
  )

  this.slot(header, 'header', page.url)

  return (
    <>
      <article class="Article prose">
        {{ html: content }}
      </article>
    </>
  )
}