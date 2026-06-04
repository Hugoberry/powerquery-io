---
title: Date.AddDays
---

# Date.AddDays


Додає вказані дні до дати.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Повертає результат `date`, `datetime` або `datetimezone` додавання `numberOfDays` дн. до значення `datetime` `dateTime`.

-   `dateTime`: значення `date`, `datetime` або `datetimezone`, до якого додаються дні.
-   `numberOfDays`: кількість днів для додавання.


## Examples

### Example #1
Додавання 5 днів до значення `date`, `datetime` або `datetimezone`, що представляє дату 14.05.11.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
