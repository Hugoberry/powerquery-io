---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Deduce tipul de număr granular (Int64.Type, Double.Type și așa mai departe) al unui număr codificat în text.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Deduce tipul de număr granular (Int64.Type, Double.Type și așa mai departe) al <code>text</code>. Este generată o eroare dacă <code>text</code> nu este un număr. De asemenea, poate fi furnizat un <code>culture</code> opțional (de exemplu, „ro-RO”).



## Category
Text
