---
title: Text.InferNumberType
---

# Text.InferNumberType


Určuje podrobný typ čísla (Int64.Type, Double.Type atď.), ktoré je zakódované v texte.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Odvodí granulárny typ čísla (Int64.Type, Double.Type atď.) pre `text`. Ak `text` nie je číslo, vyvolá sa chyba. Voliteľne sa tiež môže zadať `culture` (napríklad en-US).



## Category
Text
