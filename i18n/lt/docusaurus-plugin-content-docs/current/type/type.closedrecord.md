---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Pateikiama uždaryta nurodyto įrašo tipo versija (arba to paties tipo, jei jau uždaryta).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Pateikiama uždaryta nurodyto `record` `type` versija (arba to paties tipo, jei jau uždaryta).


## Examples

### Example #1
Sukurkite `type [ A = number,...]` tipo uždarytą versiją.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
