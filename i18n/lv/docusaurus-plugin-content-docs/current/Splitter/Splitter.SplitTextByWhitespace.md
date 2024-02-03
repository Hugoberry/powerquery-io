---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Tiek atgriezta funkcija, kas nodrošina teksta sadali atbilstoši baltstarpas pozīcijai, izveidojot teksta vērtību sarakstu.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Tiek atgriezta funkcija, kas nodrošina teksta sadali atbilstoši baltstarpas pozīcijai, izveidojot teksta vērtību sarakstu.


## Examples

### Example #1 
Sadalīt ievadi pēc baltstarpas rakstzīmēm, apstrādājot pēdiņas tāpat kā citas rakstzīmes.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
