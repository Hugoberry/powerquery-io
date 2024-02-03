---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Creează o înregistrare care reprezintă un punct geografic pornind de la părți.


## Syntax

```powerquery
GeographyPoint.From(
    longitude as number,
    latitude as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Details

Creează o înregistrare care reprezintă un punct geografic pornind de la componentele sale constitutive, cum ar fi longitudinea, latitudinea și, dacă sunt prezente, altitudinea (Z) și măsura (M). Un identificator opțional de referință spațială (SRID) poate fi specificat dacă este diferit de valoarea implicită (4326).



## Category
Record.Serialization
