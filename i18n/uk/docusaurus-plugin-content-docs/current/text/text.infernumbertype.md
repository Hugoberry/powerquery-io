---
title: Text.InferNumberType
---

# Text.InferNumberType


Визначає числовий тип із деталізацією (Int64.Type, Double.Type тощо) закодованого в тексті числа.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Визначає числовий тип із деталізацією (Int64.Type, Double.Type тощо) `text`. Помилка стається, якщо параметр `text` не є числом. Крім того, можна вказати необов’язковий параметр `culture` (наприклад, "uk-UA").



## Category
Text
