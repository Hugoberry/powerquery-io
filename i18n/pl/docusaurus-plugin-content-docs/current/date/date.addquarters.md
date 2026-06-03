---
title: Date.AddQuarters
---

# Date.AddQuarters


Dodaje określoną liczbę kwartałów do daty.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Zwraca wynik — w formie wartości typu `date`, `datetime` lub `datetimezone` — dodania `numberOfQuarters` kwartałów do wartości typu `datetime` równej `dateTime`.

-   `dateTime`: wartość typu `date`, `datetime` lub `datetimezone`, do której są dodawane kwartały.
-   `numberOfQuarters`: liczba kwartałów do dodania.


## Examples

### Example #1
Dodaj 1 kwartał do wartości typu `date`, `datetime` lub `datetimezone` reprezentującej datę 2011-05-14.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
