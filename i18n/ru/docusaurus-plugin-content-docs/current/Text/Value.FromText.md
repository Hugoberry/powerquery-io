---
title: Value.FromText
---

# Value.FromText


Создает строго типизированное значение из текстового представления.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Расшифровывает значение из текстового представления <code>text</code> и преобразует его в качестве значения с соответствующим типом.    <code>Value.FromText</code> принимает текстовое значение и возвращает число, логическое значение, значение NULL, значение даты и времени, значение длительности или текстовое значение. Пустое текстовое значение интерпретируется как значение NULL.    Также может быть указан необязательный параметр <code>culture</code> (например, "ru-RU").



## Category
Text.Conversions from and to text
