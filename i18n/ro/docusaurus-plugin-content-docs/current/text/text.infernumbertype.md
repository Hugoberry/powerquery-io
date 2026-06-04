---
title: Text.InferNumberType
---

# Text.InferNumberType


Deduce tipul de număr granular (Int64.Type, Double.Type și așa mai departe) al unui număr codificat în text.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Deduce tipul de număr granular (Int64.Type, Double.Type și așa mai departe) al `text`. Este generată o eroare dacă `text` nu este un număr. De asemenea, poate fi furnizat un `culture` opțional (de exemplu, „ro-RO”).



## Category
Text
