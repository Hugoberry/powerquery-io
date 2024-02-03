---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi minkä tahansa määritetyn erottimen kohdalla.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi minkä tahansa määritetyn erottimen kohdalla.


## Examples

### Example #1 
Jaa syöte pilkulla tai puolipisteellä ohittaen lainausmerkit ja lainausmerkeissä olevat erottimet ja aloittaen syötteen alusta.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Jaa syöte pilkulla tai puolipisteellä ohittaen lainausmerkit ja lainausmerkeissä olevat erottimet ja aloittaen syötteen lopusta.
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
