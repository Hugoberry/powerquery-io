---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Konvertuje binarnu vrednost u listu tekstualnih vrednosti podeljenih kod preloma reda. Ako se navede stil znakova navoda, prelomi reda se mogu pojaviti pod znakovima navoda. Ako includeLineSeparators ima vrednost „true“, znakovi za prelom reda su uključeni u tekst.


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

Konvertuje binarnu vrednost u listu tekstualnih vrednosti podeljenih kod preloma reda. Ako se navede stil znakova navoda, prelomi reda se mogu pojaviti pod znakovima navoda. Ako includeLineSeparators ima vrednost „true“, znakovi za prelom reda su uključeni u tekst.



## Category
Lines
