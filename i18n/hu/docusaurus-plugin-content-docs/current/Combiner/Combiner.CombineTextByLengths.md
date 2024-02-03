---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Olyan függvényt ad vissza, amely szöveges értékekből álló listát egyesít a megadott hosszúságok használatával.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Olyan függvényt ad vissza, amely egyetlen szövegértékben egyesíti a szöveges értékekből álló listát a megadott hosszúságok használatával.


## Examples

### Example #1 
Szöveges értékekből álló listát egyesít a megadott számú karakter mindegyik bemeneti értékből való kinyerésével.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Szöveges értékekből álló listát egyesít a megadott számú karakter kinyerésével, miután először előzetesen kitöltötte az eredményt a sablonszöveggel.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
