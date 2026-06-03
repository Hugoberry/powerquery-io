---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Erstatter værdier i det angivne input.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Erstatter værdien `old` i den oprindelige `value` med værdien `new`. Denne erstatningsfunktion kan bruges i `List.ReplaceValue` og `Table.ReplaceValue`.


## Examples

### Example #1
Erstat værdien 11 med værdien 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
