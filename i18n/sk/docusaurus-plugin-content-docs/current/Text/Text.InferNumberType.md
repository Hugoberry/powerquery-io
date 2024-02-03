---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Určuje podrobný typ čísla (Int64.Type, Double.Type atď.), ktoré je zakódované v texte.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Odvodí granulárny typ čísla (Int64.Type, Double.Type atď.) pre <code>text</code>. Ak <code>text</code> nie je číslo, vyvolá sa chyba. Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).



## Category
Text
