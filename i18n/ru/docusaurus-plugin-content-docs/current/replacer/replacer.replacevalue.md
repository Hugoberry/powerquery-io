---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Заменяет значения в предоставленных входных данных.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Заменяет значение `old` в исходном `value` значением `new`. Эту функцию замены можно использовать в `List.ReplaceValue` и `Table.ReplaceValue`.


## Examples

### Example #1
Заменить значение 11 значением 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
