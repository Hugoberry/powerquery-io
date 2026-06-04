---
title: Text.InferNumberType
---

# Text.InferNumberType


Johtaa tekstiin koodatun luvun askelluvun tyypin (Int64.Type, Double.Type ja niin edelleen).


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Johtaa `text`askelluvun tyypin (Int64.Type, Double.Type ja niin edelleen). Virhe, jos `text` ei ole luku. Valinnainen `culture` voidaan myös antaa (esimerkiksi en-US).



## Category
Text
