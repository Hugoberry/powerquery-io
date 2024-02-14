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

Возвращает результат преобразования всех символов в значении <code>text</code> в верхний регистр. Также может быть указан необязательный параметр <code>culture</code> (например, "ru-RU").


## Examples

### Example #1 
Получить версию строки &#34;aBcD&#34; в нижнем регистре.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
