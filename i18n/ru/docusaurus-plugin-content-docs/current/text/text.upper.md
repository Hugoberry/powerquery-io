---
title: Text.Upper
---

# Text.Upper


Преобразует все символы в верхний регистр.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Возвращает результат преобразования всех символов в значении `text` в верхний регистр. Также может быть указан необязательный параметр `culture` (например, "ru-RU").


## Examples

### Example #1
Получить версию строки "aBcD" в нижнем регистре.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
