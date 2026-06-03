---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Substitui valores pela entrada fornecida.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Substitui o valor `old` no `value` original pelo valor `new`. Esta função de substituição pode ser utilizada em `List.ReplaceValue` e `Table.ReplaceValue`.


## Examples

### Example #1
Substituir o valor 11 pelo valor 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
