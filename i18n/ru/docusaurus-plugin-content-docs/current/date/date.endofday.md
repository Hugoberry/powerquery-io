---
title: Date.EndOfDay
---

# Date.EndOfDay


Возвращает конец дня.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

Возвращает конец дня, который представлен с использованием <code>dateTime</code>. Данные о часовом поясе сохраняются.      <ul>      <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, на основе которого вычисляется конец дня.</li>      </ul>


## Examples

### Example #1 
Возвращает конец дня для 14.05.2011 17:00:00.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Возвращает конец дня для 17.05.2011 17:00:00-19:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
