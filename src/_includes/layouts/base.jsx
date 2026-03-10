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
          <p class='CompanyIntro__tagline'>The new business of business.</p>
          <p>
            Research and intelligence products for the mutual benefit of ambitious nimble teams and hidden talent.
          </p>
          <br />
          <em>BACKGROUND</em>
          <p>
            As 6M+ small and midsize firms change hands, the future of local economies and jobs will be defined by how nimble teams gain the scale advantages of big business — without the baggage and bureaucracy — to create value for all.
          </p>
          <p>
            Teams don’t need "expert calls", consultants, or a manager class. They need co-conspirators with domain competence to uplevel their operational DNA. This is doubly the mandatory baseline from which machine intelligence can actually compound into unfair advantages. Not into more garbage.
          </p>
          <br />
          <em>ABOUT US</em>
          <p>
            Our intelligence and curated non-transactional networks fuel high-agency operations and guide how companies capture proprietary contextual operational knowledge and data to then use frontier machine intelligence to amplify real gains.
          </p>

          <p>
            Teams get this human-machine capability to profitably defy intractable constraints. Talent gains high-signal legibility and access to intel and opportunities they deserve.
          </p>

          <br />

          <details class='CompanyIntro__more'>
            <summary>Read more about our thesis...</summary>
            <div>
              <p>Despite tech advancements, we lack a surefire way to separate the talent density + machine intelligence dynamic that compounds previously unattainable capabilities for experts, investors, and their companies — from the noise & mimicry that doesn’t. </p>

              <p>Business operations are a tapestry of domains. So, tech should expand access to and utility of expertise ecosystems to augment how we audit, stress test, and uplevel operations. This provides a confident basis to underwrite frontier tech to defy operational constraints and gain scale advantages.  </p>

              <p>But tech has leaned towards scaling transactional access. Not facilitating compounding from reciprocity and generosity. Pay-to-play platforms for ghost jobs, one-size-fits-none insights, and faux access dominate. So you have start-sputter-stop company and talent improvements, not the full arc of a company’s growth or breadth of talent inflections, which compound advantages. </p>

              <p>Small differences in ability, when run through powerful amplifiers, produce enormous differences in outcomes. Technology reveals inequality that was always latent, waiting for the right context to matter. And frontier tech will reveal operational DNA differentiation. </p>

              <p>The paradigm focuses on machine intelligence replacing labor. That’s incomplete. </p>

              <p>A company with shaky operations will send them on wild goose chases to find the right lever to pull at the right time. But with no access to helpful domain expertise, embracing frontier tech won’t help them transcend bandwidth constraints to scale great economics on limited resources. Tech in an incoherent operational context amplifies chaos. </p>

              <p>Companies should wonder how differentiated their operational DNA is to truly win with frontier tech. This means that access becomes reciprocal. It is no longer whether talent has access to the right room. But whether the room also has access to the right talent to buttress their work. </p>

              <p>The right “right room” matters.</p>

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
