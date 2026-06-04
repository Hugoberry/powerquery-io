---
title: Type.NonNullable
---

# Type.NonNullable


Returnează tipul care nu acceptă valoarea null dintr-un tip.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Returnează tipul care nu `acceptă valoarea null` din `type`.


## Examples

### Example #1
Returnează tipul care nu acceptă valoarea null de `număr care acceptă valoarea null`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
