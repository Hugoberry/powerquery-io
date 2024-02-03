---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Olyan függvényt ad vissza, amely szöveges értékekből álló listát egyesít elválasztó karakterek sorozatának használatával.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Olyan függvényt ad vissza, amely egyetlen szövegértékben egyesíti a szöveges értékekből álló listát elválasztó karakterek sorozatának használatával.


## Examples

### Example #1 
Szöveges értékek listáját egyesíti elválasztó karakterek sorozatának használatával.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
