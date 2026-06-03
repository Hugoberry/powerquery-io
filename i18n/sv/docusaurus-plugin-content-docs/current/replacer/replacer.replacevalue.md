---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Ersätter värden i angivna indata.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Ersätter värdet `old` i ursprungliga `value` med värdet `new`. Den här ersättningsfunktionen kan användas i `List.ReplaceValue` och `Table.ReplaceValue`.


## Examples

### Example #1
Ersätt värdet 11 med värdet 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
