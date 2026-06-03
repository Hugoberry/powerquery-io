---
title: Binary.ToText
---

# Binary.ToText


Codifica i dati binari in un formato di testo.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Restituisce il risultato della conversione di un elenco binario di numeri `binary` in un valore di testo. Facoltativamente, è possibile specificare `encoding` per indicare la codifica da usare nel valore di testo ottenuto I valori seguenti di `BinaryEncoding` possono essere usati per `encoding`.

-   `BinaryEncoding.Base64`: codifica Base 64
-   `BinaryEncoding.Hex`: codifica esadecimale



## Category
Binary
