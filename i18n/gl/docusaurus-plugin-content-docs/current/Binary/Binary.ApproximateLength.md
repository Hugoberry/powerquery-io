---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

Devolve a lonxitude aproximada do binario.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

Devolve a lonxitude aproximada de <code>binary</code>, ou un erro se a orixe de datos non admite unha lonxitude aproximada.


## Examples

### Example #1 
Obter a lonxitude aproximada do valor binario.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
