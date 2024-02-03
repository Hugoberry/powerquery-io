---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Egy olyan függvényt ad vissza, amely felosztja a szöveget egy szöveges értékekből álló listára a megadott elválasztók mindegyikénél, az elválasztók megadott sorrendjében.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Egy olyan függvényt ad vissza, amely felosztja a szöveget egy szöveges értékekből álló listára a megadott elválasztók mindegyikénél, az elválasztók megadott sorrendjében.


## Examples

### Example #1 
A bemenet felosztása vesszővel, majd pontosvesszővel, a bemenet elejétől kezdve.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
A bemenet felosztása vesszővel, majd pontosvesszővel és az idézőjelek bármely más karakterhez hasonló kezelése, a bemenet végétől kezdve.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByEachDelimiter({",", ";"}, QuoteStyle.None, startAtEnd)("a,""b;c"",d")
```

Result: 
```powerquery
{"a,""b", "c""", "d"}
```




## Category
Splitter
