---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Lecseréli az értékeket a megadott bemeneti adatban.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Lecseréli az eredeti <code>value</code> elemben levő <code>old</code> értéket az új <code>new</code> értékre. Ez a lecserélő függvény a <code>List.ReplaceValue</code> és a <code>Table.ReplaceValue</code> függvényben használható.


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
