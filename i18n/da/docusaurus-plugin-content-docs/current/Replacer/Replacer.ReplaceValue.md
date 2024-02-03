---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Erstatter værdier i det angivne input.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Erstatter værdien <code>old</code> i den oprindelige <code>value</code> med værdien <code>new</code>. Denne erstatningsfunktion kan bruges i <code>List.ReplaceValue</code> og <code>Table.ReplaceValue</code>.


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
