---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Egy olyan függvényt ad vissza, amely felosztja a szöveget egy szöveges értékekből álló listára a megadott elválasztók bármelyikénél.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Egy olyan függvényt ad vissza, amely felosztja a szöveget egy szöveges értékekből álló listára a megadott elválasztók bármelyikénél.


## Examples

### Example #1 
A bemenet felosztása vesszővel vagy pontosvesszővel, az idézőjelek és az idézőjeles határolójelek figyelmen kívül hagyásával, valamint a bemenet elejétől kezdve.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
A bemenet felosztása vesszővel vagy pontosvesszővel, az idézőjelek és az idézőjeles határolójelek figyelmen kívül hagyásával, valamint a bemenet végétől kezdve.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv, startAtEnd)("a,""b;c,d")
```

Result: 
```powerquery
{"a,b", "c", "d"}
```




## Category
Splitter
