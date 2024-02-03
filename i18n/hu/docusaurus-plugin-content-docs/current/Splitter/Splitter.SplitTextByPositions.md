---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Egy olyan függvényt ad vissza, amely felosztja a szöveget egy szöveges értékekből álló listára a megadott pozíciók mindegyikénél.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Egy olyan függvényt ad vissza, amely felosztja a szöveget egy szöveges értékekből álló listára a megadott pozíciók mindegyikénél.


## Examples

### Example #1 
A bemenet felosztása a megadott pozíciókban, a bemenet elejétől kezdve.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
A bemenet felosztása a megadott pozíciókban, a bemenet végétől kezdve.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByPositions({0, 5}, startAtEnd)("Redmond98052")
```

Result: 
```powerquery
{"Redmond", "98052"}
```




## Category
Splitter
