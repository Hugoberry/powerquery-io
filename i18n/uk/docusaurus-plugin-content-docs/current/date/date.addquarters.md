---
title: Date.AddQuarters
---

# Date.AddQuarters


Додає вказані квартали до дати.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Повертає результат `date`, `datetime` або `datetimezone` додавання `numberOfQuarters` кварт. до значення `datetime` `dateTime`.

-   `dateTime`: значення `date`, `datetime` або `datetimezone`, до якого додаються квартали.
-   `numberOfQuarters`: кількість кварталів для додавання.


## Examples

### Example #1
Додавання 1 кварталу до значення `date`, `datetime` або `datetimezone`, що представляє дату 14.05.11.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
