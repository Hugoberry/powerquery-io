---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Returnează un tabel ce include conținutul dintr-o listă SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Returnează un tabel care conține un rând pentru fiecare element de listă găsit în lista SharePoint specificată, <code>url</code>. Fiecare rând conține proprietăți ale listei. Se poate specifica <code>options</code> pentru a controla opțiunile următoare:    <ul><li><code>ApiVersion</code> : Un număr (14 sau 15) sau textul „Auto” ce specifică versiunea de API SharePoint de utilizat pentru acest site. Atunci c&#226;nd nu se specifică, se va utiliza versiunea API 14. Atunci c&#226;nd se specifică Auto, versiunea serverului va fi descoperită automat, dacă este posibil, altfel va reveni la 14. Site-urile SharePoint care nu sunt &#238;n limba engleză necesită cel puțin versiunea 15.</li><li><code>Implementation</code> : Opțional. Specifică ce versiune a conectorului SharePoint să utilizați. Valorile acceptate sunt „2.0” sau null. Dacă valoarea este „2.0”, se utilizează implementarea 2.0 a conectorului SharePoint. Dacă valoarea este nulă, se utilizează implementarea inițială a conectorului SharePoint.</li><li><code>ViewMode</code> : Opțional. Această opțiune este validă doar pentru implementarea 2.0. Valorile acceptate sunt „Toate” și „Implicite”. Dacă nu este specificată nicio valoare, valoarea este setată la „Toate”. C&#226;nd se specifică valoarea „Toate”, vizualizarea include toate coloanele create de utilizator și definite de sistem. Atunci c&#226;nd se specifică valoarea „Implicite”, vizualizarea se va potrivi cu ceea ce vede utilizatorul atunci c&#226;nd analizează lista online &#238;n orice vizualizare setată de utilizator ca implicită &#238;n setările sale. Dacă utilizatorul editează vizualizarea implicită pentru a adăuga sau a elimina coloane create de utilizator sau definite de sistem sau prin crearea unei vizualizări noi și setarea acesteia ca implicită, aceste modificări se vor propaga prin conector.</li><li><code>DisableAppendNoteColumns</code> : &#206;mpiedică conectorul să utilizeze un punct final separat pentru coloanele de note.</li></ul>    



## Category
Accessing data
