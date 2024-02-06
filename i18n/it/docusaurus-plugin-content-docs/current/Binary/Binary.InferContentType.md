---
title: Binary.InferContentType
---

# Binary.InferContentType


Legge il flusso binario e prova a determinare le informazioni sul tipo di contenuto e sul formato del flusso.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Remarks

Restituisce un record con il campo Content.Type che contiene il tipo MIME dedotto.    Se il tipo di contenuto dedotto è text/\* e viene rilevata una tabella codici di codifica, restituisce anche il campo Content.Encoding che contiene la codifica del flusso.    Se il tipo di contenuto dedotto è text/csv e il formato prevede valori delimitati, restituisce anche il campo Csv.PotentialDelimiter che contiene una tabella per l'analisi dei possibili delimitatori.    Se il tipo di contenuto dedotto è text/csv e il formato è a larghezza fissa, restituisce anche il campo Csv.PotentialPositions che contiene un elenco per l'analisi delle possibili posizioni di colonna a larghezza fissa.



## Category
Binary
