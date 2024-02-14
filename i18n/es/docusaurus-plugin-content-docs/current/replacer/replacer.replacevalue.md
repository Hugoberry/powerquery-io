---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Reemplaza valores dentro de la entrada proporcionada.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Reemplaza el valor <code>old</code> del original <code>value</code> con el valor <code>new</code>. Esta función de sutitución se puede usar en <code>List.ReplaceValue</code> y <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Reemplazar el valor 11 con el valor 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
