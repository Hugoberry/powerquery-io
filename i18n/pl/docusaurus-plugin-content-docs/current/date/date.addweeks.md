---
title: Date.AddWeeks
---

# Date.AddWeeks


Dodaje określoną liczbę tygodni do daty.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Zwraca wynik — w formie wartości typu `date`, `datetime` lub `datetimezone` — dodania `numberOfWeeks` tygodni do wartości typu `datetime` równej `dateTime`.

-   `dateTime`: wartość typu `date`, `datetime` lub `datetimezone`, do której są dodawane tygodnie.
-   `numberOfWeeks`: liczba tygodni do dodania.


## Examples

### Example #1
Dodaj 2 tygodnie do wartości typu `date`, `datetime` lub `datetimezone` reprezentującej datę 2011-05-14.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
