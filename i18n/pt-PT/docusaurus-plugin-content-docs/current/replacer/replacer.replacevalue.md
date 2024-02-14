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

Substitui o valor <code>old</code> no <code>value</code> original pelo valor <code>new</code>. Esta função de substituição pode ser utilizada em <code>List.ReplaceValue</code> e <code>Table.ReplaceValue</code>.


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
