---
title: SharePoint.Files
---

# SharePoint.Files


## Description

Returnează un tabel ce include documente de pe un site SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Details

Returnează un tabel care conține un rând pentru fiecare document găsit pe site-ul SharePoint specificat, <code>url</code>, și în subfoldere. Fiecare rând conține proprietăți ale folderului sau fișierului și o legătură la conținutul său. Se poate specifica <code>options</code> pentru a controla opțiunile următoare:    <ul><li><code>ApiVersion</code> : Un număr (14 sau 15) sau textul „Auto” ce specifică versiunea de API SharePoint de utilizat pentru acest site. Atunci c&#226;nd nu se specifică, se va utiliza versiunea API 14. Atunci c&#226;nd se specifică Auto, versiunea serverului va fi descoperită automat, dacă este posibil, altfel va reveni la 14. Site-urile SharePoint care nu sunt &#238;n limba engleză necesită cel puțin versiunea 15.</li></ul>    



## Category
Accessing data
