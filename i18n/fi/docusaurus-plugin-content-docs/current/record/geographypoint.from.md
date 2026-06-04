---
title: GeographyPoint.From
---

# GeographyPoint.From


Luo tietueen, joka edustaa maantieteellistä pistettä osista.


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


## Remarks

Luo tietueen, joka edustaa maantieteellistä pistettä sen osista, joita ovat esimerkiksi pituusaste, leveysaste ja, jos ne ovat olemassa, korkeus (Z) ja mittayksikkö (M). Valinnainen koordinaattijärjestelmän viitetunnus (SRID) voidaan antaa, jos se poikkeaa oletusarvosta (4326).



## Category
Record.Serialization
