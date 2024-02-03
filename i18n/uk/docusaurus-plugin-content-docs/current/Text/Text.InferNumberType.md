---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Визначає числовий тип із деталізацією (Int64.Type, Double.Type тощо) закодованого в тексті числа.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Визначає числовий тип із деталізацією (Int64.Type, Double.Type тощо) <code>text</code>. Помилка стається, якщо параметр <code>text</code> не є числом. Крім того, можна вказати необов’язковий параметр <code>culture</code> (наприклад, "uk-UA").



## Category
Text
