---
title: Date.Day
---

# Date.Day


Возвращает компонент дня.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Возвращает компонент дня значения `date`, `datetime` или `datetimezone`.

-   `dateTime`: значение `date`, `datetime` или `datetimezone`, из которого извлекается компонент дня.


## Examples

### Example #1
Получает компонент дня значения `date`, `datetime` или `datetimezone`, представляющего дату 14.05.2011 и время 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
