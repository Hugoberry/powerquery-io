import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

// Each feature is an array of parts. A plain string renders as text; an object
// of the form { code: '...' } renders inside a <code> element. Keeping the code
// fragments separate lets every locale share the same markup.
const TRANSLATIONS = {
  en: {
    eyebrow: 'Related project',
    lede:
      'Parse Power BI files directly in your browser — no uploads, no server. Everything runs locally via WebAssembly.',
    features: [
      ['Drop a ', {code: '.pbix'}, ' file or paste a public URL to load it instantly'],
      ['Load any public file via ', {code: 'pbix.info/<url>'}],
      ['Explore tables, M and DAX code, and the data model diagram'],
      ['Share a snapshot with a persistent link'],
    ],
    cta: 'Open PBIX.info →',
  },
  cs: {
    eyebrow: 'Související projekt',
    lede:
      'Analyzujte soubory Power BI přímo ve svém prohlížeči — žádné nahrávání, žádný server. Vše běží lokálně přes WebAssembly.',
    features: [
      ['Přetáhněte soubor ', {code: '.pbix'}, ' nebo vložte veřejnou URL a načtěte jej okamžitě'],
      ['Načtěte jakýkoli veřejný soubor přes ', {code: 'pbix.info/<url>'}],
      ['Prozkoumejte tabulky, kód M a DAX a diagram datového modelu'],
      ['Sdílejte snímek pomocí trvalého odkazu'],
    ],
    cta: 'Otevřít PBIX.info →',
  },
  da: {
    eyebrow: 'Relateret projekt',
    lede:
      'Parse Power BI-filer direkte i din browser — ingen uploads, ingen server. Alt kører lokalt via WebAssembly.',
    features: [
      ['Slip en ', {code: '.pbix'}, '-fil eller indsæt en offentlig URL for at indlæse den med det samme'],
      ['Indlæs enhver offentlig fil via ', {code: 'pbix.info/<url>'}],
      ['Udforsk tabeller, M- og DAX-kode og datamodeldiagrammet'],
      ['Del et øjebliksbillede med et permanent link'],
    ],
    cta: 'Åbn PBIX.info →',
  },
  de: {
    eyebrow: 'Verwandtes Projekt',
    lede:
      'Parsen Sie Power BI-Dateien direkt in Ihrem Browser — keine Uploads, kein Server. Alles läuft lokal über WebAssembly.',
    features: [
      ['Ziehen Sie eine ', {code: '.pbix'}, '-Datei hinein oder fügen Sie eine öffentliche URL ein, um sie sofort zu laden'],
      ['Laden Sie jede öffentliche Datei über ', {code: 'pbix.info/<url>'}],
      ['Erkunden Sie Tabellen, M- und DAX-Code sowie das Datenmodelldiagramm'],
      ['Teilen Sie eine Momentaufnahme mit einem dauerhaften Link'],
    ],
    cta: 'PBIX.info öffnen →',
  },
  el: {
    eyebrow: 'Σχετικό έργο',
    lede:
      'Αναλύστε αρχεία Power BI απευθείας στο πρόγραμμα περιήγησής σας — χωρίς μεταφορτώσεις, χωρίς διακομιστή. Όλα εκτελούνται τοπικά μέσω WebAssembly.',
    features: [
      ['Σύρετε ένα αρχείο ', {code: '.pbix'}, ' ή επικολλήστε μια δημόσια URL για άμεση φόρτωση'],
      ['Φορτώστε οποιοδήποτε δημόσιο αρχείο μέσω ', {code: 'pbix.info/<url>'}],
      ['Εξερευνήστε πίνακες, κώδικα M και DAX και το διάγραμμα μοντέλου δεδομένων'],
      ['Μοιραστείτε ένα στιγμιότυπο με έναν μόνιμο σύνδεσμο'],
    ],
    cta: 'Άνοιγμα PBIX.info →',
  },
  es: {
    eyebrow: 'Proyecto relacionado',
    lede:
      'Analice archivos de Power BI directamente en su navegador — sin cargas, sin servidor. Todo se ejecuta localmente mediante WebAssembly.',
    features: [
      ['Suelte un archivo ', {code: '.pbix'}, ' o pegue una URL pública para cargarlo al instante'],
      ['Cargue cualquier archivo público a través de ', {code: 'pbix.info/<url>'}],
      ['Explore tablas, código M y DAX, y el diagrama del modelo de datos'],
      ['Comparta una instantánea con un enlace permanente'],
    ],
    cta: 'Abrir PBIX.info →',
  },
  fr: {
    eyebrow: 'Projet associé',
    lede:
      'Analysez les fichiers Power BI directement dans votre navigateur — aucun téléchargement, aucun serveur. Tout s’exécute localement via WebAssembly.',
    features: [
      ['Déposez un fichier ', {code: '.pbix'}, ' ou collez une URL publique pour le charger instantanément'],
      ['Chargez n’importe quel fichier public via ', {code: 'pbix.info/<url>'}],
      ['Explorez les tables, le code M et DAX, et le diagramme du modèle de données'],
      ['Partagez un instantané avec un lien permanent'],
    ],
    cta: 'Ouvrir PBIX.info →',
  },
  hi: {
    eyebrow: 'संबंधित परियोजना',
    lede:
      'Power BI फ़ाइलों को सीधे अपने ब्राउज़र में पार्स करें — कोई अपलोड नहीं, कोई सर्वर नहीं। सब कुछ WebAssembly के माध्यम से स्थानीय रूप से चलता है।',
    features: [
      ['कोई ', {code: '.pbix'}, ' फ़ाइल छोड़ें या सार्वजनिक URL पेस्ट करें और उसे तुरंत लोड करें'],
      ['किसी भी सार्वजनिक फ़ाइल को इसके माध्यम से लोड करें ', {code: 'pbix.info/<url>'}],
      ['तालिकाएँ, M और DAX कोड, और डेटा मॉडल आरेख का अन्वेषण करें'],
      ['स्थायी लिंक के साथ एक स्नैपशॉट साझा करें'],
    ],
    cta: 'PBIX.info खोलें →',
  },
  hu: {
    eyebrow: 'Kapcsolódó projekt',
    lede:
      'Elemezze a Power BI fájlokat közvetlenül a böngészőjében — feltöltés nélkül, szerver nélkül. Minden helyben fut a WebAssembly segítségével.',
    features: [
      ['Húzzon be egy ', {code: '.pbix'}, ' fájlt, vagy illesszen be egy nyilvános URL-t az azonnali betöltéshez'],
      ['Töltsön be bármilyen nyilvános fájlt a következőn keresztül: ', {code: 'pbix.info/<url>'}],
      ['Fedezze fel a táblákat, az M és DAX kódot, valamint az adatmodell-diagramot'],
      ['Osszon meg egy pillanatképet egy állandó hivatkozással'],
    ],
    cta: 'PBIX.info megnyitása →',
  },
  id: {
    eyebrow: 'Proyek terkait',
    lede:
      'Uraikan file Power BI langsung di browser Anda — tanpa unggahan, tanpa server. Semuanya berjalan secara lokal melalui WebAssembly.',
    features: [
      ['Jatuhkan file ', {code: '.pbix'}, ' atau tempel URL publik untuk memuatnya secara instan'],
      ['Muat file publik apa pun melalui ', {code: 'pbix.info/<url>'}],
      ['Jelajahi tabel, kode M dan DAX, serta diagram model data'],
      ['Bagikan cuplikan dengan tautan permanen'],
    ],
    cta: 'Buka PBIX.info →',
  },
  it: {
    eyebrow: 'Progetto correlato',
    lede:
      'Analizza i file Power BI direttamente nel tuo browser — nessun caricamento, nessun server. Tutto viene eseguito localmente tramite WebAssembly.',
    features: [
      ['Trascina un file ', {code: '.pbix'}, ' o incolla un URL pubblico per caricarlo all’istante'],
      ['Carica qualsiasi file pubblico tramite ', {code: 'pbix.info/<url>'}],
      ['Esplora tabelle, codice M e DAX e il diagramma del modello di dati'],
      ['Condividi un’istantanea con un link permanente'],
    ],
    cta: 'Apri PBIX.info →',
  },
  ja: {
    eyebrow: '関連プロジェクト',
    lede:
      'Power BI ファイルをブラウザーで直接解析します — アップロードもサーバーも不要。すべて WebAssembly でローカルに実行されます。',
    features: [
      [{code: '.pbix'}, ' ファイルをドロップするか、公開 URL を貼り付けて即座に読み込みます'],
      ['任意の公開ファイルを次の方法で読み込みます: ', {code: 'pbix.info/<url>'}],
      ['テーブル、M および DAX コード、データモデル図を探索します'],
      ['永続的なリンクでスナップショットを共有します'],
    ],
    cta: 'PBIX.info を開く →',
  },
  ko: {
    eyebrow: '관련 프로젝트',
    lede:
      'Power BI 파일을 브라우저에서 직접 구문 분석하세요 — 업로드도 서버도 없습니다. 모든 것이 WebAssembly를 통해 로컬에서 실행됩니다.',
    features: [
      [{code: '.pbix'}, ' 파일을 드롭하거나 공개 URL을 붙여넣어 즉시 불러오세요'],
      ['공개 파일을 다음을 통해 불러오세요: ', {code: 'pbix.info/<url>'}],
      ['테이블, M 및 DAX 코드, 데이터 모델 다이어그램을 살펴보세요'],
      ['영구 링크로 스냅샷을 공유하세요'],
    ],
    cta: 'PBIX.info 열기 →',
  },
  lt: {
    eyebrow: 'Susijęs projektas',
    lede:
      'Analizuokite Power BI failus tiesiai naršyklėje — be įkėlimų, be serverio. Viskas veikia vietoje per WebAssembly.',
    features: [
      ['Nuvilkite ', {code: '.pbix'}, ' failą arba įklijuokite viešą URL, kad iškart jį įkeltumėte'],
      ['Įkelkite bet kurį viešą failą per ', {code: 'pbix.info/<url>'}],
      ['Naršykite lenteles, M ir DAX kodą bei duomenų modelio diagramą'],
      ['Bendrinkite momentinę kopiją su nuolatine nuoroda'],
    ],
    cta: 'Atidaryti PBIX.info →',
  },
  lv: {
    eyebrow: 'Saistīts projekts',
    lede:
      'Parsējiet Power BI failus tieši savā pārlūkprogrammā — bez augšupielādēm, bez servera. Viss darbojas lokāli, izmantojot WebAssembly.',
    features: [
      ['Nometiet ', {code: '.pbix'}, ' failu vai ielīmējiet publisku URL, lai to uzreiz ielādētu'],
      ['Ielādējiet jebkuru publisku failu, izmantojot ', {code: 'pbix.info/<url>'}],
      ['Izpētiet tabulas, M un DAX kodu un datu modeļa diagrammu'],
      ['Kopīgojiet momentuzņēmumu ar pastāvīgu saiti'],
    ],
    cta: 'Atvērt PBIX.info →',
  },
  ms: {
    eyebrow: 'Projek berkaitan',
    lede:
      'Hurai fail Power BI terus dalam pelayar anda — tiada muat naik, tiada pelayan. Semuanya berjalan secara setempat melalui WebAssembly.',
    features: [
      ['Lepaskan fail ', {code: '.pbix'}, ' atau tampal URL awam untuk memuatkannya serta-merta'],
      ['Muatkan mana-mana fail awam melalui ', {code: 'pbix.info/<url>'}],
      ['Terokai jadual, kod M dan DAX, serta gambar rajah model data'],
      ['Kongsi syot kilat dengan pautan kekal'],
    ],
    cta: 'Buka PBIX.info →',
  },
  nl: {
    eyebrow: 'Gerelateerd project',
    lede:
      'Parseer Power BI-bestanden rechtstreeks in uw browser — geen uploads, geen server. Alles draait lokaal via WebAssembly.',
    features: [
      ['Sleep een ', {code: '.pbix'}, '-bestand of plak een openbare URL om het direct te laden'],
      ['Laad elk openbaar bestand via ', {code: 'pbix.info/<url>'}],
      ['Verken tabellen, M- en DAX-code en het datamodeldiagram'],
      ['Deel een momentopname met een permanente link'],
    ],
    cta: 'PBIX.info openen →',
  },
  pl: {
    eyebrow: 'Powiązany projekt',
    lede:
      'Analizuj pliki Power BI bezpośrednio w przeglądarce — bez przesyłania, bez serwera. Wszystko działa lokalnie dzięki WebAssembly.',
    features: [
      ['Upuść plik ', {code: '.pbix'}, ' lub wklej publiczny adres URL, aby załadować go natychmiast'],
      ['Załaduj dowolny publiczny plik za pomocą ', {code: 'pbix.info/<url>'}],
      ['Przeglądaj tabele, kod M i DAX oraz diagram modelu danych'],
      ['Udostępnij migawkę za pomocą trwałego łącza'],
    ],
    cta: 'Otwórz PBIX.info →',
  },
  'pt-BR': {
    eyebrow: 'Projeto relacionado',
    lede:
      'Analise arquivos do Power BI diretamente no seu navegador — sem uploads, sem servidor. Tudo é executado localmente via WebAssembly.',
    features: [
      ['Solte um arquivo ', {code: '.pbix'}, ' ou cole uma URL pública para carregá-lo instantaneamente'],
      ['Carregue qualquer arquivo público via ', {code: 'pbix.info/<url>'}],
      ['Explore tabelas, código M e DAX e o diagrama do modelo de dados'],
      ['Compartilhe um instantâneo com um link permanente'],
    ],
    cta: 'Abrir PBIX.info →',
  },
  'pt-PT': {
    eyebrow: 'Projeto relacionado',
    lede:
      'Analise ficheiros do Power BI diretamente no seu navegador — sem carregamentos, sem servidor. Tudo é executado localmente através de WebAssembly.',
    features: [
      ['Largue um ficheiro ', {code: '.pbix'}, ' ou cole um URL público para o carregar instantaneamente'],
      ['Carregue qualquer ficheiro público através de ', {code: 'pbix.info/<url>'}],
      ['Explore tabelas, código M e DAX e o diagrama do modelo de dados'],
      ['Partilhe um instantâneo com uma ligação permanente'],
    ],
    cta: 'Abrir PBIX.info →',
  },
  ro: {
    eyebrow: 'Proiect asociat',
    lede:
      'Analizați fișierele Power BI direct în browser — fără încărcări, fără server. Totul rulează local prin WebAssembly.',
    features: [
      ['Plasați un fișier ', {code: '.pbix'}, ' sau lipiți un URL public pentru a-l încărca instantaneu'],
      ['Încărcați orice fișier public prin ', {code: 'pbix.info/<url>'}],
      ['Explorați tabele, cod M și DAX și diagrama modelului de date'],
      ['Partajați un instantaneu printr-un link permanent'],
    ],
    cta: 'Deschideți PBIX.info →',
  },
  ru: {
    eyebrow: 'Связанный проект',
    lede:
      'Анализируйте файлы Power BI прямо в браузере — без загрузок, без сервера. Всё выполняется локально через WebAssembly.',
    features: [
      ['Перетащите файл ', {code: '.pbix'}, ' или вставьте публичный URL, чтобы мгновенно его загрузить'],
      ['Загрузите любой публичный файл через ', {code: 'pbix.info/<url>'}],
      ['Изучайте таблицы, код M и DAX и диаграмму модели данных'],
      ['Поделитесь снимком по постоянной ссылке'],
    ],
    cta: 'Открыть PBIX.info →',
  },
  'sr-Latn': {
    eyebrow: 'Povezani projekat',
    lede:
      'Parsirajte Power BI datoteke direktno u pregledaču — bez otpremanja, bez servera. Sve se izvršava lokalno preko WebAssembly-ja.',
    features: [
      ['Prevucite ', {code: '.pbix'}, ' datoteku ili nalepite javni URL da biste je odmah učitali'],
      ['Učitajte bilo koju javnu datoteku preko ', {code: 'pbix.info/<url>'}],
      ['Istražite tabele, M i DAX kod i dijagram modela podataka'],
      ['Podelite snimak pomoću trajne veze'],
    ],
    cta: 'Otvori PBIX.info →',
  },
  sv: {
    eyebrow: 'Relaterat projekt',
    lede:
      'Analysera Power BI-filer direkt i din webbläsare — inga uppladdningar, ingen server. Allt körs lokalt via WebAssembly.',
    features: [
      ['Släpp en ', {code: '.pbix'}, '-fil eller klistra in en offentlig URL för att läsa in den direkt'],
      ['Läs in vilken offentlig fil som helst via ', {code: 'pbix.info/<url>'}],
      ['Utforska tabeller, M- och DAX-kod och datamodelldiagrammet'],
      ['Dela en ögonblicksbild med en permanent länk'],
    ],
    cta: 'Öppna PBIX.info →',
  },
  th: {
    eyebrow: 'โครงการที่เกี่ยวข้อง',
    lede:
      'แยกวิเคราะห์ไฟล์ Power BI ได้โดยตรงในเบราว์เซอร์ของคุณ — ไม่ต้องอัปโหลด ไม่ต้องใช้เซิร์ฟเวอร์ ทุกอย่างทำงานในเครื่องผ่าน WebAssembly',
    features: [
      ['วางไฟล์ ', {code: '.pbix'}, ' หรือวาง URL สาธารณะเพื่อโหลดทันที'],
      ['โหลดไฟล์สาธารณะใดก็ได้ผ่าน ', {code: 'pbix.info/<url>'}],
      ['สำรวจตาราง โค้ด M และ DAX และไดอะแกรมแบบจำลองข้อมูล'],
      ['แชร์สแน็ปช็อตด้วยลิงก์ถาวร'],
    ],
    cta: 'เปิด PBIX.info →',
  },
  tr: {
    eyebrow: 'İlgili proje',
    lede:
      'Power BI dosyalarını doğrudan tarayıcınızda ayrıştırın — yükleme yok, sunucu yok. Her şey WebAssembly ile yerel olarak çalışır.',
    features: [
      ['Bir ', {code: '.pbix'}, ' dosyası bırakın veya anında yüklemek için herkese açık bir URL yapıştırın'],
      ['Herhangi bir herkese açık dosyayı şunun aracılığıyla yükleyin: ', {code: 'pbix.info/<url>'}],
      ['Tabloları, M ve DAX kodunu ve veri modeli diyagramını keşfedin'],
      ['Kalıcı bir bağlantıyla anlık görüntü paylaşın'],
    ],
    cta: 'PBIX.info’yu aç →',
  },
  uk: {
    eyebrow: 'Пов’язаний проєкт',
    lede:
      'Аналізуйте файли Power BI безпосередньо у браузері — без завантажень, без сервера. Усе виконується локально через WebAssembly.',
    features: [
      ['Перетягніть файл ', {code: '.pbix'}, ' або вставте публічний URL, щоб миттєво його завантажити'],
      ['Завантажте будь-який публічний файл через ', {code: 'pbix.info/<url>'}],
      ['Досліджуйте таблиці, код M і DAX та діаграму моделі даних'],
      ['Поділіться знімком за допомогою постійного посилання'],
    ],
    cta: 'Відкрити PBIX.info →',
  },
  vi: {
    eyebrow: 'Dự án liên quan',
    lede:
      'Phân tích các tệp Power BI trực tiếp trong trình duyệt của bạn — không tải lên, không máy chủ. Mọi thứ chạy cục bộ qua WebAssembly.',
    features: [
      ['Thả một tệp ', {code: '.pbix'}, ' hoặc dán một URL công khai để tải ngay lập tức'],
      ['Tải bất kỳ tệp công khai nào qua ', {code: 'pbix.info/<url>'}],
      ['Khám phá bảng, mã M và DAX, và sơ đồ mô hình dữ liệu'],
      ['Chia sẻ ảnh chụp nhanh bằng một liên kết vĩnh viễn'],
    ],
    cta: 'Mở PBIX.info →',
  },
  'zh-Hans': {
    eyebrow: '相关项目',
    lede:
      '直接在浏览器中解析 Power BI 文件——无需上传，无需服务器。一切都通过 WebAssembly 在本地运行。',
    features: [
      ['拖入 ', {code: '.pbix'}, ' 文件或粘贴公共 URL 即可立即加载'],
      ['通过 ', {code: 'pbix.info/<url>'}, ' 加载任何公共文件'],
      ['浏览表、M 和 DAX 代码以及数据模型关系图'],
      ['通过持久链接分享快照'],
    ],
    cta: '打开 PBIX.info →',
  },
  'zh-Hant': {
    eyebrow: '相關專案',
    lede:
      '直接在瀏覽器中解析 Power BI 檔案——無需上傳，無需伺服器。一切都透過 WebAssembly 在本機執行。',
    features: [
      ['拖入 ', {code: '.pbix'}, ' 檔案或貼上公開 URL 即可立即載入'],
      ['透過 ', {code: 'pbix.info/<url>'}, ' 載入任何公開檔案'],
      ['瀏覽資料表、M 和 DAX 程式碼以及資料模型關係圖'],
      ['透過永久連結分享快照'],
    ],
    cta: '開啟 PBIX.info →',
  },
};

export default function RelatedProject() {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const t = TRANSLATIONS[currentLocale] || TRANSLATIONS.en;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.body}>
            <span className={styles.eyebrow}>{t.eyebrow}</span>
            <Heading as="h2" className={styles.title}>
              PBIX.info
            </Heading>
            <p className={styles.lede}>{t.lede}</p>
            <ul className={styles.features}>
              {t.features.map((parts, i) => (
                <li key={i}>
                  {parts.map((part, j) =>
                    typeof part === 'string' ? (
                      part
                    ) : (
                      <code key={j}>{part.code}</code>
                    ),
                  )}
                </li>
              ))}
            </ul>
            <Link
              className={`button button--primary button--lg ${styles.cta}`}
              href="https://pbix.info">
              {t.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
