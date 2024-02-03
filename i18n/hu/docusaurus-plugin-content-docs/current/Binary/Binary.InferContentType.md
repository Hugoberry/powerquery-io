---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Beolvassa a bináris streamet, és megpróbálja megállapítani a stream tartalomtípusát és formátumadatait.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Egy rekordot ad vissza a Content.Type mezővel, amely a kikövetkeztetett MIME-típust tartalmazza.     Ha a kikövetkeztetett tartalomtípus a text/\*, és egy kódolási kódlap is észlelhető, akkor a Content.Encoding mezőt is visszaadja, amely a stream kódolását tartalmazza.    Ha a kikövetkeztetett tartalomtípus a text/csv, és a formátum vesszővel tagolt fájl, akkor a Csv.PotentialDelimiter mezőt is visszaadja, amely a lehetséges elválasztó karakterek elemzési tábláját tartalmazza.    Ha a kikövetkeztetett tartalomtípus a text/csv, és a formátum rögzített szélességű szövegfájl, akkor a Csv.PotentialPositions mezőt is visszaadja, amely a lehetséges rögzített szélességű oszloppozíciók elemzési listáját tartalmazza.



## Category
Binary
