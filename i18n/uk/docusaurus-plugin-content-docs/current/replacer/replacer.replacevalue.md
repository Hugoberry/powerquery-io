---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Замінює значення у введених даних.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Замінює значення `old` у вихідному `value` на значення `new`. Ця функція заміни може використовуватися в `List.ReplaceValue` і `Table.ReplaceValue`.


## Examples

### Example #1
Замінити значення 11 на значення 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
