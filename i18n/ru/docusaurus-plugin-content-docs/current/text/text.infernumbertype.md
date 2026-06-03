---
title: Text.InferNumberType
---

# Text.InferNumberType


Выводит числовой тип с детализацией (Int64.Type, Double.Type и т. д.) для числа, закодированного в тексте


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Определяет тип детализированного числа (Int64.Type, Double.Type и т. д.) `text`. Ошибка возникает, если `text` не является числом. Также может быть предоставлено необязательное `culture` значение (например, "en-US").



## Category
Text
