---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Convertit une valeur binaire en une liste de valeurs de texte fractionnées au niveau des sauts de lignes. Si un style de guillemets est spécifié, les sauts de ligne peuvent apparaître entre guillemets. Si includeLineSeparators a la valeur true, les caractères de saut de ligne sont inclus dans le texte.


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

Convertit une valeur binaire en une liste de valeurs de texte fractionnées au niveau des sauts de lignes. Si un style de guillemets est spécifié, les sauts de ligne peuvent apparaître entre guillemets. Si includeLineSeparators a la valeur true, les caractères de saut de ligne sont inclus dans le texte.



## Category
Lines
