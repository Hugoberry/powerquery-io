---
title: Type.NonNullable
---

# Type.NonNullable


Egy adott típus nullmentes típusvariánsának visszaadása.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

A(z) `type` paraméterben megadott típus `nullable` típusmódosítótól megfosztott variánsának visszaadása.


## Examples

### Example #1
A `type nullable number` érték nullmentes típusvariánsának visszaadása.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
