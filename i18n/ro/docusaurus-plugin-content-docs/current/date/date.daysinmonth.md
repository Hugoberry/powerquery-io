---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Returnează un număr de la 28 la 31, care indică numărul de zile din lună.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Returnează numărul de zile din lună din valoarea `date`, `datetime` sau `datetimezone` `dateTime`.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` pentru care se returnează numărul de zile din lună.


## Examples

### Example #1
Numărul de zile din luna decembrie este reprezentat prin `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
