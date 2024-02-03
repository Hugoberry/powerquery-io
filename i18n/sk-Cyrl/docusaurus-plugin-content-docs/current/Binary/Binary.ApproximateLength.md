---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

Vráti približnú dĺžku binárnej hodnoty.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

Vráti približnú dĺžku <code>binary</code>, alebo chybu, ak zdroj údajov nepodporuje približnú dĺžku.


## Examples

### Example #1 
Získajte približnú dĺžku binárnej hodnoty.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
