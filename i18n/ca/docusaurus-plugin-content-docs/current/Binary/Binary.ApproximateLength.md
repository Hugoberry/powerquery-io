---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

Retorna la longitud aproximada del binari.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

Retorna la longitud aproximada de <code>binary</code>, o un error si l'origen de dades no admet la longitud aproximada.


## Examples

### Example #1 
Obté la longitud aproximada del valor binari.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
