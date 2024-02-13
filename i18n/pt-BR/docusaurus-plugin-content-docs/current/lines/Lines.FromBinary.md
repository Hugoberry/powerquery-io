---
title: Lines.FromBinary
---

# Lines.FromBinary


Converte um valor binário em uma lista de valores de texto divididos em quebras de linha. Se um delimitador for especificado, as quebras de linha possivelmente aparecerão entre aspas. Se includeLineSeparators for true, os caracteres de quebra de linha serão incluídos no texto.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Remarks

Converte um valor binário em uma lista de valores de texto divididos em quebras de linha. Se um delimitador for especificado, as quebras de linha possivelmente aparecerão entre aspas. Se includeLineSeparators for true, os caracteres de quebra de linha serão incluídos no texto.



## Category
Lines
