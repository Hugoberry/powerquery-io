---
title: Text.From
---

# Text.From


Создает текстовое значение из заданного значения.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Возвращает текстовое представление <code>value</code>. Значение <code>value</code> может иметь тип <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> или <code>binary</code>.    Если указанное значение равно NULL, <code>Text.From</code> возвращает значение NULL. Также может быть указан необязательный параметр <code>culture</code> (например, "ru-RU").


## Examples

### Example #1 
Создать текстовое значение из числа 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
