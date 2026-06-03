---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Возвращает конец недели.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Возвращает конец недели, которая содержит `dateTime`. Эта функция принимает необязательное значение `День`, `firstDayOfWeek` и устанавливает его в качестве первого дня недели для этого относительного вычисления. Значение по умолчанию: `Day.Sunday`.

-   `dateTime`: значение `date`, `datetime` или `datetimezone`, на основе которого вычисляется последний день недели
-   `firstDayOfWeek`: *(необязательно)* значение `Day.Type`, представляющее первый день недели. Допустимые значения: `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` и `Day.Saturday.`. Значение по умолчанию — `Day.Sunday`.


## Examples

### Example #1
Возвращает конец недели для 14.05.2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Получает конец недели для 17.05.2011 17:00:00-7:00, если воскресенье - первый день недели.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
