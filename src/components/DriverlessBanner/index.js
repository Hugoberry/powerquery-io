import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Banner shown at the top of every page in the "Driverless connectors" section.
// These functions are NOT part of the Power Query standard library, and the
// distinction has to be unmissable on every page — someone landing here from a
// search for "Spss.Document" must not walk away thinking it ships with the
// product. One component so the package name and the download link are a
// single string to change.
//
// Deliberately untranslated for now: the rest of the section is English-only.
// When it gets localised, follow the TRANSLATIONS pattern in RelatedProject.

export const PACKAGE = 'PQDriverless';
export const REPO = 'https://github.com/Hugoberry/powerquery-driverless';
export const DOWNLOAD =
  'https://github.com/Hugoberry/powerquery-driverless/releases/latest';

export default function DriverlessBanner() {
  return (
    <div className={styles.banner}>
      <span className={styles.badge}>{PACKAGE}</span>
      <p className={styles.text}>
        Not part of the Power Query standard library. This function ships in{' '}
        <Link href={REPO}>
          <strong>{PACKAGE}</strong>
        </Link>
        , an open-source package of pure M readers for binary file formats — no
        ODBC driver, no OLE DB provider, nothing to install. Paste the M source
        into a blank query, or load <code>{PACKAGE}.mez</code> as a custom
        connector. See <Link to="/driverless/usage/installing">Installing</Link>.
      </p>
    </div>
  );
}
