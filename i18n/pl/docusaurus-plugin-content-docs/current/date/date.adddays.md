---
title: Date.AddDays
---

# Date.AddDays


Dodaje określoną liczbę dni do daty.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Zwraca wynik — w formie wartości typu `date`, `datetime` lub `datetimezone` — dodania `numberOfDays` dni do wartości typu `datetime` równej `dateTime`.

-   `dateTime`: wartość typu `date`, `datetime` lub `datetimezone`, do której są dodawane dni.
-   `numberOfDays`: liczba dni do dodania.


## Examples

### Example #1
Dodaj 5 dni do wartości typu `date`, `datetime` lub `datetimezone` reprezentującej datę 2011-05-14.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
