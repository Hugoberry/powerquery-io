---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

Retorna o comprimento aproximado do binário.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

Retorna o comprimento aproximado de <code>binary</code> ou um erro se a fonte de dados não for compatível com um comprimento aproximado.


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
