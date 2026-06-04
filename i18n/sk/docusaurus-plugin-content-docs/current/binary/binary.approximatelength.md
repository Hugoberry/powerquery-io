---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Vráti približnú dĺžku binárnej hodnoty.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Vráti približnú dĺžku `binary`, alebo chybu, ak zdroj údajov nepodporuje približnú dĺžku.


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
