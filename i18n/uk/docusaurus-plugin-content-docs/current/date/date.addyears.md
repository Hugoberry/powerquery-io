---
title: Date.AddYears
---

# Date.AddYears


Додає вказані роки до дати.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Повертає результат `date`, `datetime` або `datetimezone` додавання `numberOfYears` до значення `datetime` `dateTime`.

-   `dateTime`: значення `date`, `datetime` або `datetimezone`, до якого додаються роки.
-   `numberOfYears`: кількість років для додавання.


## Examples

### Example #1
Додавання 4 років до значення `date`, `datetime` або `datetimezone`, що представляє дату 14.05.11.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Додавання 10 років до значення `date`, `datetime` або `datetimezone`, що представляє дату й час 14.05.11 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
