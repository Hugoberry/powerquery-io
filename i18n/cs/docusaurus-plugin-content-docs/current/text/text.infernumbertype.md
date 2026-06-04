---
title: Text.InferNumberType
---

# Text.InferNumberType


Odvodí podrobný typ čísla (Int64.Type, Double.Type atd.) zakódovaného v textu.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Vyvodí přesný typ čísla (Int64.Type, Double.Type atd.) pro `text`. Pokud `text` není číslo, vyvolá se chyba. Volitelně je možné zadat i `culture` (např. „en-US“).



## Category
Text
