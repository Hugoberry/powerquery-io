---
title: Type.OpenRecord
---

# Type.OpenRecord


Returnează o versiune deschisă a tipului de înregistrare dat (sau același tip, dacă este deja deschisă).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Returnează o versiune deschisă a `înregistrării` date `type` (sau același tip, dacă este deja deschisă).


## Examples

### Example #1
Creați o versiune deschisă de `type [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
