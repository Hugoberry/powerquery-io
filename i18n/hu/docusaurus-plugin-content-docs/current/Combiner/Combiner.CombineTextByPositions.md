---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Olyan függvényt ad vissza, amely szöveges értékekből álló listát egyesít a megadott kimeneti helyzetek használatával.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Olyan függvényt ad vissza, amely egyetlen szövegértékben egyesíti a szöveges értékekből álló listát a megadott kimeneti helyzetek használatával.


## Examples

### Example #1 
Szöveges értékekből álló listát egyesít az értékeknek a kimenet megadott helyzeteibe történő elhelyezésével.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
