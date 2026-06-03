---
title: Date.AddWeeks
---

# Date.AddWeeks


Добавляет указанные недели к дате.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Возвращает результат `date`, `datetime` или `datetimezone` после добавления `numberOfWeeks` недель к значению `datetime`, `dateTime`.

-   `dateTime`: значение `date`, `datetime` или `datetimezone`, к которому добавляются недели.
-   `numberOfWeeks`: число недель, которое нужно добавить.


## Examples

### Example #1
Добавляет 2 недели к значению `date`, `datetime` или `datetimezone`, представляющему дату 14.05.2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
