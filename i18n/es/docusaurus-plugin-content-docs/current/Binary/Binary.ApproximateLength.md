---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

Devuelve la longitud aproximada del binario.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

Devuelve la longitud aproximada de <code>binary</code>, o un error si el origen de datos no admite una longitud aproximada.


## Examples

### Example #1 
Obtiene la longitud aproximada del valor binario.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
