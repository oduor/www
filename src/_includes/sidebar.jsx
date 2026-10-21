export default function ({ mobile = false, collections }) {
  const contactSection = (
    <div>
      <h2>Contact</h2>
      <nav class='Sidebar__nav'>
        <ul class='unstyled'>
          <li>
            <a href="mailto:info@batianpeak.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              info@batianpeak.com
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );

  const featuredSection = (
    <div>
      <h2>Featured</h2>
      <ul class='featured'>
        {collections.featuredPosts?.map(post => (
          <li>
            <a href={post.url}>{post.data.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );

  const years = Object.keys(collections.postsByYear || {}).reverse();

  const archivesSection = (
    <div class='Sidebar__years'>
      <h2>Archives</h2>
      <ul class='Sidebar__years unstyled inline'>
        {years.map(year => (
          <li>
            <a href={`/${year}`}>{year}</a>
          </li>
        ))}
      </ul>
    </div>
  );

  const mainContent = (
    <>
      {contactSection}
      {featuredSection}
      {archivesSection}
    </>
  );

  return (
    <>
      {mobile ? (
        <details class='Sidebar__details'>
          <summary class='Sidebar__summary'></summary>
          <div>
            {mainContent}
          </div>
        </details>
      ) : (
        mainContent
      )}
    </>
  )
}
