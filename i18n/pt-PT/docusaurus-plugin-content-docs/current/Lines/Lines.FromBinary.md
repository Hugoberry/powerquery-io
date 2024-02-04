---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Converte um valor binário numa lista de valores de texto divididos por quebras de linha. Se for especificado um estilo de cotação, as quebras de linha poderão aparecer entre aspas. Se includeLineSeparators tiver o valor true, os carateres de quebra de linha serão incluídos no texto.


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

Converte um valor binário numa lista de valores de texto divididos por quebras de linha. Se for especificado um estilo de cotação, as quebras de linha poderão aparecer entre aspas. Se includeLineSeparators tiver o valor true, os carateres de quebra de linha serão incluídos no texto.



## Category
Lines
