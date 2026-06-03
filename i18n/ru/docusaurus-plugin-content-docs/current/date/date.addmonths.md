---
title: Date.AddMonths
---

# Date.AddMonths


Добавляет указанные месяцы к дате.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Возвращает результат `date`, `datetime` или `datetimezone` после добавления `numberOfMonths` мес. к значению `datetime`, `dateTime`.

-   `dateTime`: значение `date`, `datetime` или `datetimezone`, к которому добавляются месяцы.
-   `numberOfMonths`: число месяцев, которое нужно добавить.


## Examples

### Example #1
Добавляет 5 месяцев к значению `date`, `datetime` или `datetimezone`, представляющему дату 14.05.2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Добавляет 18 месяцев к значению `date`, `datetime` или `datetimezone`, представляющее дату и время 14.05.2011 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
