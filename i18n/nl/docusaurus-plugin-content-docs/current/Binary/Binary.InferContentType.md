---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Leest de binaire stroom en probeert het inhoudstype en de indelingsinformatie van de stroom vast te stellen.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Hiermee wordt een record met het veld Content.Type geretourneerd dat het afgeleide MIME-type bevat. Als het afgeleide inhoudstype text/\* is en er een codetabel voor coderen wordt gedetecteerd, wordt ook het veld Content.Encoding geretourneerd, dat de codering van de stroom bevat. Als het afgeleide inhoudstype text/csv is en de indeling scheidingstekens bevat, wordt ook het veld Csv.PotentialDelimiter geretourneerd, dat een tabel voor het analyseren van potentiële scheidingstekens bevat. Als het afgeleide inhoudstype text/csv is en de indeling een vaste breedte heeft, wordt ook het veld Csv.PotentialPositions geretourneerd, dat een lijst bevat voor het analyseren van mogelijke kolomposities met een vaste breedte.



## Category
Binary
