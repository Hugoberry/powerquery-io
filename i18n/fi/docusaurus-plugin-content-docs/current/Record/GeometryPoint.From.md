---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Luo tietueen, joka edustaa geometristä pistettä osista.


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

Luo tietueen, joka edustaa maantieteellistä pistettä sen osista, joita ovat esimerkiksi X-koordinaatti, Y-koordinaatti ja, jos ne ovat olemassa, Z-koordinaatti ja mittayksikkö (M). Valinnainen koordinaattijärjestelmän viitetunnus (SRID) voidaan antaa, jos se poikkeaa oletusarvosta (0).



## Category
Record.Serialization
