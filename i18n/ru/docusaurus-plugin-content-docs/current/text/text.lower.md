---
title: Text.Lower
---

# Text.Lower


Преобразует все символы в нижний регистр.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Возвращает результат преобразования всех символов в значении `text` в нижний регистр. Также может быть указан необязательный параметр `culture` (например, "ru-RU").


## Examples

### Example #1
Получить версию строки "AbCd" в нижнем регистре.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
