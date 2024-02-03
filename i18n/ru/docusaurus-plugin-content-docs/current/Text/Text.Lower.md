---
title: Text.Lower
---

# Text.Lower


## Description

Преобразует все символы в нижний регистр.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Возвращает результат преобразования всех символов в значении <code>text</code> в нижний регистр. Также может быть указан необязательный параметр <code>culture</code> (например, "ru-RU").


## Examples

### Example #1 
Получить версию строки &#34;AbCd&#34; в нижнем регистре.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
