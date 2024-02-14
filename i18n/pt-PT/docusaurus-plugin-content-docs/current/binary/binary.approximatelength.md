---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Devolve o comprimento aproximado do binário.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Devolve o comprimento aproximado de <code>binary</code>, ou um erro se a origem de dados não suportar um comprimento aproximado.


## Examples

### Example #1 
Obtenha o comprimento aproximado do valor binário.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
