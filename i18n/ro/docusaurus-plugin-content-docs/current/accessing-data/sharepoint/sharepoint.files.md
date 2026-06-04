---
title: SharePoint.Files
---

# SharePoint.Files


Returnează un tabel ce include documente de pe un site SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel care conține un rând pentru fiecare document găsit pe site-ul SharePoint specificat, `url`, și în subfoldere. Fiecare rând conține proprietăți ale folderului sau fișierului și o legătură la conținutul său. Se poate specifica `options` pentru a controla opțiunile următoare:

-   `ApiVersion` : Un număr (14 sau 15) sau textul „Auto” ce specifică versiunea de API SharePoint de utilizat pentru acest site. Atunci când nu se specifică, se va utiliza versiunea API 14. Atunci când se specifică Auto, versiunea serverului va fi descoperită automat, dacă este posibil, altfel va reveni la 14. Site-urile SharePoint care nu sunt în limba engleză necesită cel puțin versiunea 15.



## Category
Accessing data
