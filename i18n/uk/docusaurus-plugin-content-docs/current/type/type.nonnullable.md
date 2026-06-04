---
title: Type.NonNullable
---

# Type.NonNullable


Повертає тип, який не підтримує пусті значення, з типу.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Повертає тип, який не належить до типу `nullable`, з типу `type`.


## Examples

### Example #1
Повернути тип, який не підтримує пусті значення, з типу `type nullable number`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
