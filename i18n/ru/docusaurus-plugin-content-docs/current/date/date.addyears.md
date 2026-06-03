---
title: Date.AddYears
---

# Date.AddYears


Добавляет указанное число лет к дате.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Возвращает результат `date`, `datetime` или `datetimezone` после добавления `numberOfYears` к значению `datetime`, `dateTime`.

-   `dateTime`: значение `date`, `datetime` или `datetimezone`, к которому добавляются годы.
-   `numberOfYears`: число лет, которое нужно добавить.


## Examples

### Example #1
Добавляет 4 года к значению `date`, `datetime` или `datetimezone`, представляющему дату 14.05.2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Добавляет 10 лет к значению `date`, `datetime` или `datetimezone`, представляющему дату и время 14.05.2011 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
