---
title: Date.AddYears
---

# Date.AddYears


Dodaje określoną liczbę lat do daty.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Zwraca wynik — w formie wartości typu `date`, `datetime` lub `datetimezone` — dodania `numberOfYears` lat do wartości typu `datetime` równej `dateTime`.

-   `dateTime`: wartość typu `date`, `datetime` lub `datetimezone`, do której są dodawane lata.
-   `numberOfYears`: liczba lat do dodania.


## Examples

### Example #1
Dodaj 4 lata do wartości typu `date`, `datetime` lub `datetimezone` reprezentującej datę 2011-05-14.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Dodaj 10 lat do wartości typu `date`, `datetime` lub `datetimezone` reprezentującej datę 2011-05-14 i godzinę 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
