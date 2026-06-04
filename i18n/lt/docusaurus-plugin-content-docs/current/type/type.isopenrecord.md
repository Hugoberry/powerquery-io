---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Nurodo, ar įrašo tipas atidarytas.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Pateikiama `logical` reikšmė, nurodanti, ar įrašas `type` atidarytas.


## Examples

### Example #1
Nustatykite, ar įrašas `type [ A = number, ...]` atidarytas.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
