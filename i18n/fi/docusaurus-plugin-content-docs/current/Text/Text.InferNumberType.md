---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Johtaa tekstiin koodatun luvun askelluvun tyypin (Int64.Type, Double.Type ja niin edelleen).


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Johtaa <code>text</code>askelluvun tyypin (Int64.Type, Double.Type ja niin edelleen). Virhe, jos <code>text</code> ei ole luku. Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).



## Category
Text
