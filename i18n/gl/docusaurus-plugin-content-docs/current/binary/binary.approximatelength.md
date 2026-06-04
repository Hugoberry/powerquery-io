---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Devolve a lonxitude aproximada do binario.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Devolve a lonxitude aproximada de `binary`, ou un erro se a orixe de datos non admite unha lonxitude aproximada.


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
