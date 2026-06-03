---
title: Date.AddQuarters
---

# Date.AddQuarters


Добавляет указанные кварталы к дате.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Возвращает результат `date`, `datetime` или `datetimezone` после добавления `numberOfQuarters` кварталов к значению `datetime`, `dateTime`.

-   `dateTime`: значение `date`, `datetime` или `datetimezone`, к которому добавляются кварталы.
-   `numberOfQuarters`: число кварталов, которое нужно добавить.


## Examples

### Example #1
Добавляет 1 квартал к значению `date`, `datetime` или `datetimezone`, представляющему дату 14.05.2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
