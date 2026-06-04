---
title: Date.AddMonths
---

# Date.AddMonths


Додає вказані місяці до дати.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Повертає результат `date`, `datetime` або `datetimezone` додавання `numberOfMonths` міс. до значення `datetime` `dateTime`.

-   `dateTime`: значення `date`, `datetime` або `datetimezone`, до якого додаються місяці.
-   `numberOfMonths`: кількість місяців для додавання.


## Examples

### Example #1
Додавання 5 місяців до значення `date`, `datetime` або `datetimezone`, що представляє дату 14.05.11.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Додавання 18 місяців до значення `date`, `datetime` або `datetimezone`, що представляє дату й час 14.05.11 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
