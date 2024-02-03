---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

Pateikia apytikslį dvejetainės reikšmės ilgį.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

Jei duomenų šaltinis nepalaiko apytikslio ilgio, pateikiamas apytikslis <code>binary</code> ilgis arba klaida.


## Examples

### Example #1 
Gauti apytikslį dvejetainės reikšmės ilgį.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
