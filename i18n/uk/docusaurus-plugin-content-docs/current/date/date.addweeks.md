---
title: Date.AddWeeks
---

# Date.AddWeeks


Додає вказані тижні до дати.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Повертає результат `date`, `datetime` або `datetimezone` додавання `numberOfWeeks` тиж. до значення `datetime` `dateTime`.

-   `dateTime`: значення `date`, `datetime` або `datetimezone`, до якого додаються тижні.
-   `numberOfWeeks`: кількість тижнів для додавання.


## Examples

### Example #1
Додавання 2 тижнів до значення `date`, `datetime` або `datetimezone`, що представляє дату 14.05.11.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
