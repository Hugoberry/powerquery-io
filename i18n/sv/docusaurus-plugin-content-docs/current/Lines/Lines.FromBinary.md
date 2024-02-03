---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Konverterar ett binärvärde till en lista med textvärden uppdelade vid radbrytningar. Om en citatstil anges kan radbrytningar visas inom citattecken. Om includeLineSeparators är true tas radbrytningstecknen med i texten.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Details

Konverterar ett binärvärde till en lista med textvärden uppdelade vid radbrytningar. Om en citatstil anges kan radbrytningar visas inom citattecken. Om includeLineSeparators är true tas radbrytningstecknen med i texten.



## Category
Lines
