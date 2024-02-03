---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Выводит числовой тип с детализацией (Int64.Type, Double.Type и т. д.) для числа, закодированного в тексте


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Определяет тип детализированного числа (Int64.Type, Double.Type и т. д.) <code>text</code>. Ошибка возникает, если <code>text</code> не является числом. Также может быть предоставлено необязательное <code>culture</code> значение (например, "en-US").



## Category
Text
