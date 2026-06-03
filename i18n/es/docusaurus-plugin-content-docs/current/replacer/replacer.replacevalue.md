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

Reemplaza el valor `old` del original `value` con el valor `new`. Esta función de sutitución se puede usar en `List.ReplaceValue` y `Table.ReplaceValue`.


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
