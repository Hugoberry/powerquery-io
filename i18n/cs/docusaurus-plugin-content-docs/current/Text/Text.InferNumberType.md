---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Odvodí podrobný typ čísla (Int64.Type, Double.Type atd.) zakódovaného v textu.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Vyvodí přesný typ čísla (Int64.Type, Double.Type atd.) pro <code>text</code>. Pokud <code>text</code> není číslo, vyvolá se chyba. Volitelně je možné zadat i <code>culture</code> (např. „en-US“).



## Category
Text
