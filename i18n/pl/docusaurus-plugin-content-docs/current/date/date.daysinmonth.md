---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Zwraca liczbę z przedziału od 28 do 31 wskazującą liczbę dni w miesiącu.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Zwraca liczbę dni w miesiącu z wartości typu `date`, `datetime` lub `datetimezone` równej `dateTime`.

-   `dateTime`: wartość typu `date`, `datetime` lub `datetimezone`, z której jest zwracana liczba dni w miesiącu.


## Examples

### Example #1
Liczba dni w miesiącu grudniu przedstawionym w postaci `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
