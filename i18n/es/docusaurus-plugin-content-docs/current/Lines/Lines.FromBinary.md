---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Convierte un valor binario en una lista de valores de texto dividida por saltos de línea. Si se especifica un estilo de comillas, los saltos de línea pueden aparecer entrecomillados. Si el valor includeLineSeparators es True, los caracteres de saltos de línea se incluyen en el texto.


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

Convierte un valor binario en una lista de valores de texto dividida por saltos de línea. Si se especifica un estilo de comillas, los saltos de línea pueden aparecer entrecomillados. Si el valor includeLineSeparators es True, los caracteres de saltos de línea se incluyen en el texto.



## Category
Lines
