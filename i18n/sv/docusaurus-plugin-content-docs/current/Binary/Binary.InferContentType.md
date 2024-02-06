---
title: Binary.InferContentType
---

# Binary.InferContentType


Läser den binära dataströmmen och försöker identifiera information om dataströmmens innehållstyp och format.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Remarks

Returnerar en post med fältet Content.Type som innehåller den härledda MIME-typen.    Om den härledda innehållstypen är text/\*, och en kodningsteckentabell identifieras returnerar dessutom fältet Content.Encoding som innehåller kodning av dataströmmen.    Om den härledda innehållstypen är text/csv och formatet är avgränsat, så returnerar fältet Csv.PotentialDelimiter som innehåller en tabell för analys av potentiella avgränsare.    Om den härledda innehållstypen är text/csv och formatet är fast bredd, returnerar fältet Csv.PotentialPositions som innehåller en lista för analys av potentiella kolumnpositioner för fast bredd.



## Category
Binary
