---
title: SharePoint.Contents
---

# SharePoint.Contents


Returnează un tabel ce include conţinutul de pe un site SharePoint.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel care conține un rând pentru fiecare folder și document găsit pe site-ul SharePoint specificat, `url`. Fiecare rând conține proprietăți ale folderului sau fișierului și o legătură la conținutul său. Se poate specifica `options` pentru a controla opțiunile următoare:

-   `ApiVersion` : Un număr (14 sau 15) sau textul „Auto” ce specifică versiunea de API SharePoint de utilizat pentru acest site. Atunci când nu se specifică, se va utiliza versiunea API 14. Atunci când se specifică Auto, versiunea serverului va fi descoperită automat, dacă este posibil, altfel va reveni la 14. Site-urile SharePoint care nu sunt în limba engleză necesită cel puțin versiunea 15.
-   `Implementation` : Opțional. Specifică ce versiune a conectorului SharePoint să utilizați. Valorile acceptate sunt „2.0” sau null. Dacă valoarea este „2.0”, se utilizează implementarea 2.0 a conectorului SharePoint. Dacă valoarea este nulă, se utilizează implementarea inițială a conectorului SharePoint.



## Category
Accessing data
