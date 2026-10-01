import './App.css';
import './DataPortfolio.css';

function App() {
  return (
    <div className="portfolio" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Suryansh Rastogi, home">
          <span className="brand-mark">SR</span>
          <span className="brand-name">Suryansh Rastogi<small>DATA ENGINEER</small></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#focus">Focus</a>
          <a href="#stack">Toolbox</a>
          <a href="#approach">Approach</a>
        </nav>
        <a className="header-link" href="mailto:en.suryanshrastogi@gmail.com" aria-label="Email en.suryanshrastogi@gmail.com">en.suryanshrastogi@gmail.com <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> DATA ENGINEERING · AZURE · ANALYTICS</p>
            <h1 id="hero-title">I turn complex data into <em>trusted systems.</em></h1>
            <p className="hero-summary">I’m Suryansh, a Data Engineer building end-to-end pipelines, lakehouse platforms, and analytics-ready data with Azure, PySpark, and SQL.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#focus">Explore my focus <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="https://www.linkedin.com/in/16suryansh-rastogi/" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
            <p className="hero-note">From reliable ingestion to decision-ready reporting.</p>
          </div>

          <div className="pipeline-visual" aria-label="Example data platform flow from source systems through Azure Data Factory, ADLS and Delta Lake, Databricks, and Power BI">
            <div className="visual-topline"><span>DATA PLATFORM / 01</span><span>END-TO-END FLOW</span></div>
            <div className="pipeline-source">
              <span className="node-index">INPUT</span>
              <strong>Source systems</strong>
              <span>APIs · SQL · files</span>
            </div>
            <div className="flow-connector"><span /></div>
            <div className="pipeline-row">
              <div className="pipeline-node node-orchestrate"><span className="node-index">01 / ORCHESTRATE</span><strong>Azure Data Factory</strong><span>Ingest · schedule · monitor</span></div>
              <div className="flow-arrow" aria-hidden="true">→</div>
              <div className="pipeline-node node-store"><span className="node-index">02 / STORE</span><strong>ADLS Gen2 + Delta</strong><span>Raw · refined · curated</span></div>
            </div>
            <div className="flow-connector"><span /></div>
            <div className="pipeline-row">
              <div className="pipeline-node node-process"><span className="node-index">03 / TRANSFORM</span><strong>Databricks + PySpark</strong><span>Quality · business logic</span></div>
              <div className="flow-arrow" aria-hidden="true">→</div>
              <div className="pipeline-node node-serve"><span className="node-index">04 / SERVE</span><strong>Synapse + Power BI</strong><span>Models · insights</span></div>
            </div>
            <div className="visual-footer"><span className="pulse-line" /> BUILT FOR TRACEABILITY, QUALITY & SCALE</div>
          </div>
        </section>

        <section className="focus-section section-wrap" id="focus" aria-labelledby="focus-title">
          <div className="section-heading">
            <div><p className="eyebrow">WHERE I ADD VALUE</p><h2 id="focus-title">From source to <em>insight.</em></h2></div>
            <p className="section-intro">A practical, end-to-end view of data engineering: dependable movement, thoughtful modeling, and useful outcomes.</p>
          </div>
          <div className="focus-grid">
            <article className="focus-item">
              <span className="item-number">01</span><span className="focus-icon" aria-hidden="true">↘</span>
              <h3>Move data reliably</h3>
              <p>Build orchestrated ETL/ELT workflows with incremental loads, parameterized pipelines, monitoring, and clear failure handling.</p>
              <div className="tag-list"><span>Azure Data Factory</span><span>Logic Apps</span><span>Power Automate</span></div>
            </article>
            <article className="focus-item">
              <span className="item-number">02</span><span className="focus-icon" aria-hidden="true">⌘</span>
              <h3>Shape data at scale</h3>
              <p>Transform distributed datasets with PySpark and Delta Lake, applying data quality checks and performance-minded processing.</p>
              <div className="tag-list"><span>Databricks</span><span>PySpark</span><span>Delta Lake</span></div>
            </article>
            <article className="focus-item">
              <span className="item-number">03</span><span className="focus-icon" aria-hidden="true">▤</span>
              <h3>Model for decisions</h3>
              <p>Design warehouse structures and analytical datasets that support consistent reporting and understandable business metrics.</p>
              <div className="tag-list"><span>Synapse</span><span>SQL Server</span><span>Power BI</span></div>
            </article>
          </div>
        </section>

        <section className="stack-section" id="stack" aria-labelledby="stack-title">
          <div className="section-wrap stack-inner">
            <div className="stack-heading"><p className="eyebrow">TOOLS I WORK WITH</p><h2 id="stack-title">A focused <em>toolbox.</em></h2><p>Grouped by the work they help me do, not just by vendor.</p></div>
            <div className="stack-groups">
              <div className="stack-group"><span className="stack-label">CODE</span><div><strong>Python</strong><strong>PySpark</strong><strong>SQL</strong><strong>DAX</strong></div></div>
              <div className="stack-group"><span className="stack-label">INGEST & ORCHESTRATE</span><div><strong>Azure Data Factory</strong><strong>Logic Apps</strong><strong>Power Automate</strong></div></div>
              <div className="stack-group"><span className="stack-label">STORE & PROCESS</span><div><strong>ADLS Gen2</strong><strong>Blob Storage</strong><strong>Databricks</strong><strong>Delta Lake</strong></div></div>
              <div className="stack-group"><span className="stack-label">MODEL & ANALYZE</span><div><strong>Synapse Analytics</strong><strong>SQL Server</strong><strong>ClickHouse</strong><strong>Power BI</strong></div></div>
              <div className="stack-group"><span className="stack-label">PRACTICES</span><div><strong>Dimensional modeling</strong><strong>Incremental processing</strong><strong>Data quality</strong><strong>Azure DevOps</strong></div></div>
            </div>
          </div>
        </section>

        <section className="approach-section section-wrap" id="approach" aria-labelledby="approach-title">
          <div className="approach-mark" aria-hidden="true"><span>RAW</span><i /><span>REFINED</span><i /><span>READY</span></div>
          <div className="approach-copy"><p className="eyebrow">HOW I THINK ABOUT THE WORK</p><h2 id="approach-title">A pipeline is only as good as the <em>trust it earns.</em></h2><p>I care about more than moving data from A to B. I think about what happens when a load is late, how a metric is defined, whether a transformation can be rerun safely, and how someone can verify the result.</p><p>That means combining sound warehouse fundamentals with practical engineering: incremental processing, validation, observability, and collaboration with analytics and business teams.</p></div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-wrap contact-inner">
            <div><p className="eyebrow">HAVE A DATA CHALLENGE?</p><h2 id="contact-title">Let’s make the data <em>useful.</em></h2><p>I’m always glad to connect with people building thoughtful data platforms and analytics solutions.</p></div>
            <div className="contact-actions"><a className="button button-light" href="mailto:en.suryanshrastogi@gmail.com">en.suryanshrastogi@gmail.com <span aria-hidden="true">↗</span></a><a className="contact-secondary" href="https://www.linkedin.com/in/16suryansh-rastogi/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a className="contact-secondary" href="https://github.com/16suryanshrastogi" target="_blank" rel="noreferrer">Explore GitHub <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a className="footer-brand" href="#top">SR <span>· DATA ENGINEER</span></a><span>Designed around dependable data.</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
