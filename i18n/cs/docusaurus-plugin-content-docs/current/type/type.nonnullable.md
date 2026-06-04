---
title: Type.NonNullable
---

# Type.NonNullable


Vrací z typu typ, který nemůže mít hodnotu null (není nullable).


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Vrací z: `type` typ, který nemůže mít hodnotu null (není `nullable`).


## Examples

### Example #1
Vrací typ, který nemůže mít hodnotu null (není nullable), čísla, které může mít typ s hodnotou null (`type nullable number`).
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
