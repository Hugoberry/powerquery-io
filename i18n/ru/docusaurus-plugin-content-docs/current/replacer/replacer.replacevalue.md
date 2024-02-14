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

Заменяет значение <code>old</code> в исходном <code>value</code> значением <code>new</code>. Эту функцию замены можно использовать в <code>List.ReplaceValue</code> и <code>Table.ReplaceValue</code>.


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
