---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi välilyönnin kohdalla.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi välilyönnin kohdalla.


## Examples

### Example #1 
Jaa syöte välilyönnillä ja käsittele lainausmerkkejä muiden merkkien tavoin.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
