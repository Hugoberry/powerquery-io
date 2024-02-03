---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Creează o înregistrare care reprezintă un punct geometric, pornind de la părți.


## Syntax

```powerquery
GeometryPoint.From(
    x as number,
    y as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Details

Creează o înregistrare care reprezintă un punct geografic din părțile sale constitutive, cum ar fi coordonata X, coordonata Y și, dacă sunt prezente, coordonata Z și măsura (M). Un identificator opțional de referință spațială (SRID) poate fi specificat dacă este diferit de valoarea implicită (0).



## Category
Record.Serialization
