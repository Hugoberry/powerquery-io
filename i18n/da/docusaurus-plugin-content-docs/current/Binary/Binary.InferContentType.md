---
title: Binary.InferContentType
---

# Binary.InferContentType


Læser den binære stream og forsøger at bestemme indholdstype og formatoplysninger for stream.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Remarks

Returnerer en post med feltet Content.Type, som indeholder den angivne MIME-type.     Hvis den angivne indholdstype er tekst/\*, og der registreres en kodningsside, returneres desuden feltet Content.Encoding, der indeholder streamens kodning.    Hvis den angivne indholdstype er tekst/csv, og formatet er afgrænset, returneres desuden feltet Csv.PotentialDelimiter, der indeholder en tabel til analyse af potentielle afgrænsere.    Hvis den angivne indholdstype er tekst/csv, og formatet er med fast bredde, returneres desuden feltet Csv.PotentialPositions, der indeholder en liste til analyse af potentielle kolonneplaceringer med fast bredde.



## Category
Binary
