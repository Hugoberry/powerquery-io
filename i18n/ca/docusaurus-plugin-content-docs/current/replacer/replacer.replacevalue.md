---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Substitueix els valors dins de l'entrada proporcionada.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Substitueix el valor `old` del `value` original pel valor `new`. Aquesta funció de substitució es pot utilitzar a `List.ReplaceValue` i `Table.ReplaceValue`.


## Examples

### Example #1
Substitueix el valor 11 pel valor 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
