---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Substitui valores na entrada fornecida.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Substitui o valor `old` no `value` original pelo valor `new`. Essa função substituta pode ser usada em `List.ReplaceValue` e em `Table.ReplaceValue`.


## Examples

### Example #1
Substitua o valor 11 pelo valor 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
