---
title: Duration.FromText
---

# Duration.FromText


Возвращает значение длительности из текстового формата прошедшего времени (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Возвращает значение длительности на основе указанного текста, `text`. Эта функция способна выполнить разбор следующих форматов:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(все диапазоны задаются с включением границ)

-   ddd: число дней.
-   hh: число часов, от 0 до 23.
-   mm: число минут, от 0 до 59.
-   ss: число секунд, от 0 до 59.
-   ff: доля секунды, от 0 до 9999999.


## Examples

### Example #1
Преобразование `"2.05:55:20"` в значение `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
