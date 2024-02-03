---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi kunkin sarjassa määritetyn erottimen kohdalla.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi kunkin sarjassa määritetyn erottimen kohdalla.


## Examples

### Example #1 
Jaa syöte pilkulla ja puolipisteellä syötteen alusta alkaen.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Jaa syöte pilkulla ja puolipisteellä, käsittele lainausmerkkejä muiden merkkien tavoin ja aloita syötteen lopusta.
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
