---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Hiermee wordt een binaire waarde omgezet naar een lijst met tekstwaarden die met regeleinden zijn opgesplitst. Als er een citaatstijl is opgegeven, kunnen de regeleinden tussen aanhalingstekens verschijnen. Als includeLineSeparators true is, worden de regeleindetekens opgenomen in de tekst.


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

Hiermee wordt een binaire waarde omgezet naar een lijst met tekstwaarden die met regeleinden zijn opgesplitst. Als er een citaatstijl is opgegeven, kunnen de regeleinden tussen aanhalingstekens verschijnen. Als includeLineSeparators true is, worden de regeleindetekens opgenomen in de tekst.



## Category
Lines
