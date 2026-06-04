---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Nahradí hodnoty v rámci uvedeného vstupu.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Nahradí hodnotu `old` v pôvodnom zázname `value` hodnotou `new`. Túto funkciu nahrádzača možno použiť v časti `List.ReplaceValue` a `Table.ReplaceValue`.


## Examples

### Example #1
Nahraďte hodnotu 11 hodnotou 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
