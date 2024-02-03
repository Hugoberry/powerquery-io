---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Llegeix la seqüència binària i prova de determinar el tipus de contingut i la informació de format de la seqüència.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Retorna un registre amb el camp Content.Type que conté el tipus MIME inferit.     Si el tipus de contingut inferit és text/\* i es detecta una pàgina de codi de codificació, a més, torna el camp Content.Encoding, que conté la codificació de la seqüència.    Si el tipus de contingut inferit és text/csv i el format és delimitat, a més, torna el camp Csv.PotentialDelimiter, que conté una taula per a l'anàlisi dels delimitadors potencials.    Si el tipus de contingut inferit és text/csv i el format té un ample fix, a més, torna el camp Csv.PotentialPositions, que conté una llista per a l'anàlisi de les posicions potencials de columna d'ample fix.



## Category
Binary
