---
title: Lines.FromBinary
---

# Lines.FromBinary


Konwertuje wartość binarną na listę wartości tekstowych rozdzielonych podziałami wiersza. Jeśli zostanie określony styl cudzysłowów, podziały wiersza mogą być widoczne w cudzysłowach. Jeśli parametr includeLineSeparators ma wartość true, znaki podziału wiersza zostaną uwzględnione w tekście.


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

Konwertuje wartość binarną na listę wartości tekstowych rozdzielonych podziałami wiersza. Jeśli zostanie określony styl cudzysłowów, podziały wiersza mogą być widoczne w cudzysłowach. Jeśli parametr includeLineSeparators ma wartość true, znaki podziału wiersza zostaną uwzględnione w tekście.



## Category
Lines
