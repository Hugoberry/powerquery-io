---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


Egy olyan függvényt ad vissza, amely felosztja a szöveget egy szöveges értékekből álló listára a szóközöknél.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Egy olyan függvényt ad vissza, amely felosztja a szöveget egy szöveges értékekből álló listára a szóközöknél.


## Examples

### Example #1
A bemenet felosztása térközkarakterek szerint, idézőjelek kezelése más karakterekhez hasonlóan.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
