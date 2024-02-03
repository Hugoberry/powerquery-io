---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

Vrnjena je približna dolžina binarne vrednosti.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

Vrnjena je približna dolžina vrednosti <code>binary</code> ali pa napaka, če vir podatkov ne podpira približne vrednosti.


## Examples

### Example #1 
Pridobite približno dolžino binarne vrednosti.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
