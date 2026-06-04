import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function RelatedProject() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.body}>
            <span className={styles.eyebrow}>Related project</span>
            <Heading as="h2" className={styles.title}>
              PBIX.info
            </Heading>
            <p className={styles.lede}>
              Parse Power BI files directly in your browser — no uploads, no
              server. Everything runs locally via WebAssembly.
            </p>
            <ul className={styles.features}>
              <li>Drop a <code>.pbix</code> file or paste a public URL to load it instantly</li>
              <li>Load any public file via <code>pbix.info/&lt;url&gt;</code></li>
              <li>Explore tables, M and DAX code, and the data model diagram</li>
              <li>Share a snapshot with a persistent link</li>
            </ul>
            <Link
              className={`button button--primary button--lg ${styles.cta}`}
              href="https://pbix.info">
              Open PBIX.info →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
