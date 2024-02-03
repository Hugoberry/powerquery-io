---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


## Description

Egy olyan függvényt ad vissza, amely felosztja a szöveget egy szöveges értékekből álló listára a megadott elválasztó figyelembevételével.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Egy olyan függvényt ad vissza, amely felosztja a szöveget egy szöveges értékekből álló listára a megadott elválasztó figyelembevételével.


## Examples

### Example #1 
A bemenet felosztása vesszővel, az idézőjelek közötti vesszők figyelmen kívül hagyásával.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
