---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Retourne la longueur approximative du binaire.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Renvoie la longueur approximative de `binary`, ou une erreur si la source de données ne prend pas en charge une longueur approximative.


## Examples

### Example #1
Obtient la longueur approximative de la valeur binaire.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
