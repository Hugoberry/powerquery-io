---
title: Type.IsNullable
---

# Type.IsNullable


Повертає значення "істина", якщо тип підтримує пусті значення. В іншому разі повертає значення "хибність".


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Повертає значення `true`, якщо тип – `nullable`. В іншому разі повертає значення `false`.


## Examples

### Example #1
Визначити, чи тип `number` підтримує пусті значення.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Визначити, чи тип `type nullable number` підтримує пусті значення.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
