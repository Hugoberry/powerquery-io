---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Returnează o versiune închisă a tipului de înregistrare dat (sau același tip, dacă este deja închis).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Returnează o versiune închisă a `înregistrării` date `type` (sau același tip, dacă este deja închis).


## Examples

### Example #1
Creați o versiune închisă a `type [ A = number,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
