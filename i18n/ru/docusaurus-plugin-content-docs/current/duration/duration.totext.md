---
title: Duration.ToText
---

# Duration.ToText


Возвращает текст в формате "d.h:m:s".


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Возвращает текстовое представление заданного значения длительности в формате "день.час:мин:сек", `duration`.

-   `duration`: `длительность`, для которой вычисляется текстовое представление.
-   `format`: *(необязательно)* не рекомендуется к использованию; если значение не равно NULL, будет сгенерирована ошибка.


## Examples

### Example #1
Преобразовать `#duration(2, 5, 55, 20)` в текстовое значение.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
