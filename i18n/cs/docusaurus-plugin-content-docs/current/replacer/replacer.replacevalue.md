---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Nahradí hodnoty v zadaném vstupu.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Nahradí hodnotu `old` v původním záznamu `value` hodnotou `new`. Tento nahrazovač lze použít u hodnot `List.ReplaceValue` a `Table.ReplaceValue`.


## Examples

### Example #1
Nahradí hodnotu 11 hodnotou 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
