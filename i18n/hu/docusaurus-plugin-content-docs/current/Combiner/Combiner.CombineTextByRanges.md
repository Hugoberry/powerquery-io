---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Olyan függvényt ad vissza, amely szöveges értékekből álló listát egyesít a megadott pozíciók és hosszúságok használatával.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Olyan függvényt ad vissza, amely egyetlen szövegértékben egyesíti a szöveges értékekből álló listát a megadott kimeneti helyzetek és hosszúságok használatával. A null hosszúságérték azt jelzi, hogy a teljes tesztértéket bele kell foglalni.


## Examples

### Example #1 
Szöveges értékekből álló listát egyesít a megadott kimeneti helyzetek és hosszúságok használatával.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
