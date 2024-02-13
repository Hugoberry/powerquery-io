---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Restituisce la lunghezza approssimativa del file binario.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Restituisce il numero approssimativo di righe di <code>binary</code>o un errore se l'origine dati non supporta una lunghezza approssimativa.


## Examples

### Example #1 
Consente di ottenere la lunghezza approssimativa del valore binario.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
