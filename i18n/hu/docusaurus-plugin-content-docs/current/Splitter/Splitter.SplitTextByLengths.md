---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Egy olyan függvényt ad vissza, amely felosztja a szöveget egy szöveges értékekből álló listára a megadott hosszak mindegyikének figyelembevételével.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Egy olyan függvényt ad vissza, amely felosztja a szöveget egy szöveges értékekből álló listára a megadott hosszak mindegyikének figyelembevételével.


## Examples

### Example #1 
A bemenet felosztása az első két karakterre, majd az ezt követő három karakterre a bemenet elejétől kezdve.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
A bemenet felosztása az első három, majd az ezt követő kettő karakterre a bemenet végétől kezdve.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByLengths({5, 2}, startAtEnd)("RedmondWA98052")
```

Result: 
```powerquery
{"WA", "98052"}
```




## Category
Splitter
