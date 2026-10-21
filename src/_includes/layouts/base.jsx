import Sidebar from '../sidebar.jsx'

export const data = {
  layout: 'layouts/html.jsx',
  templateClass: 'note',
}

export default async function ({
  page,
  content,
  slots,
  collections,
  blogroll,
  mobile,
  templateClass
}) {
  return (
    <div class='Wrapper'>
      <header class='Wrapper__header'>
        <div>
          <h1 class='SiteHeader'>
            <a href="/">
              <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                Batian Peak
                <sup style={{ color: '#F44485', marginLeft: '2px', top: '-0.5em', position: 'relative' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </sup>
              </span>
            </a>
          </h1>

          <time dateTime={this.htmlDateString(page.date)}>{this.readableDate(page.date)}</time>
        </div>

        <aside class='Sidebar Sidebar--mobile'>
          <Sidebar mobile collections={collections} blogroll={blogroll} />
        </aside>
      </header >

      {templateClass === 'home' && (
        <section class='CompanyIntro'>
          <p class='CompanyIntro__tagline'>Intelligent Capital Legibility for Acquiring Small Business Assets to Build Next-Gen Companies.</p>
          <p class='SubIntro_text'>Pre-to-post accounting and financial services for small business acquisitions</p>


          <br />

          <details class='CompanyIntro__more'>
            <summary>Read more about us...</summary>
            <div>
              <p>We are a team of finance professionals and CPAs helping people build wealth and local businesses</p>
              <br></br>
              <p>Meet the Team</p>

              <p>Brian Oduor, President <br />
              <a href="https://www.linkedin.com/in/brianoduor/" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
              <br />
              
              <p>Our Accounting and CPA Partners - we partner with the best CPA and Accountants to deliver solid results</p>
              <br />
              Melissa Oduor, CPA
              <a href="https://www.linkedin.com/in/melissa-o-cpa-fcfo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <br />
              RJ Ewing, Accounting
              <a href="https://www.linkedin.com/in/ewingrj/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <br />


              </p>
              <br></br>
              <p>There's $5T+ in small business assets that need to transition in the next decade. There's not enough competent and thorough financial services to cater to the unique needs of each business - be it QoE, Valuation, Accounting or Strategic Finance. We are an intelligence-native CFO service company that helps businesseses and entreprenuers in the acquisition and transition processes. All at the speed of trust. </p>

              

            </div>
          </details>
        </section>
      )}

      <main class='Wrapper__main'>
        {slots.header && (
          <header class='prose' id='header'>
            {slots.header}
          </header>
        )}

        <div class="Content">
          {{ html: content }}
        </div>
      </main>

      <aside class='Sidebar Sidebar--desktop'>
        <Sidebar collections={collections} blogroll={blogroll} />
      </aside>
    </div >
  )
}
