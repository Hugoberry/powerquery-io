---
title: Date.AddDays
---

# Date.AddDays


Добавляет указанные дни к дате.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Возвращает результат `date`, `datetime` или `datetimezone` после добавления `numberOfDays` дней к значению `datetime`, `dateTime`.

-   `dateTime`: значение `date`, `datetime` или `datetimezone`, к которому добавляются дни.
-   `numberOfDays`: количество дней, которые нужно добавить.


## Examples

### Example #1
Добавляет 5 дней к значению `date`, `datetime` или `datetimezone`, представляющему дату 14.05.2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
