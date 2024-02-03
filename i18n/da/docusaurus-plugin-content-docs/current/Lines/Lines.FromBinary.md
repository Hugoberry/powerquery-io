---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Konverterer en binær værdi til en liste over tekstværdier, der opdeles med linjeskift. Hvis der er angivet et anførselsformat, vises linjeskift måske i anførselstegn. Hvis includeLineSeparators er true, er linjeskifttegnene inkluderet i teksten.


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

Konverterer en binær værdi til en liste over tekstværdier, der opdeles med linjeskift. Hvis der er angivet et anførselsformat, vises linjeskift måske i anførselstegn. Hvis includeLineSeparators er true, er linjeskifttegnene inkluderet i teksten.



## Category
Lines
