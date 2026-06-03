---
title: Date.AddMonths
---

# Date.AddMonths


Dodaje określoną liczbę miesięcy do daty.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Zwraca wynik — w formie wartości typu `date`, `datetime` lub `datetimezone` — dodania `numberOfMonths` miesięcy do wartości typu `datetime` równej `dateTime`.

-   `dateTime`: wartość typu `date`, `datetime` lub `datetimezone`, do której są dodawane miesiące.
-   `numberOfMonths`: liczba miesięcy do dodania.


## Examples

### Example #1
Dodaj 5 miesięcy do wartości typu `date`, `datetime` lub `datetimezone` reprezentującej datę 2011-05-14.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Dodaj 18 miesięcy do wartości typu `date`, `datetime` lub `datetimezone` reprezentującej datę 2011-05-14 i godzinę 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
