---
title: Type.OpenRecord
---

# Type.OpenRecord


Pateikiama atidaryta nurodyto įrašo tipo versija (arba to paties tipo, jei jau atidaryta).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Pateikiama atidaryta nurodyto `record` `type` versija (arba to paties tipo, jei jau atidaryta).


## Examples

### Example #1
Sukurkite `type [ A = number,…]` tipo atidarytą versiją.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
