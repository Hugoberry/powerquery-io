---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Lecseréli az értékeket a megadott bemeneti adatban.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Lecseréli az eredeti `value` elemben levő `old` értéket az új `new` értékre. Ez a lecserélő függvény a `List.ReplaceValue` és a `Table.ReplaceValue` függvényben használható.


## Examples

### Example #1
A 11 érték lecserélése a 10 értékre
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
