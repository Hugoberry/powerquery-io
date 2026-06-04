---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Atgriež skaitli no 28 līdz 31, kas norāda dienu skaitu mēnesī.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Atgriež dienu skaitu mēnesī `date`, `datetime` vai `datetimezone` vērtībā `dateTime`.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, kam tiek atgriezts dienu skaits mēnesī.


## Examples

### Example #1
Decembra mēneša dienu skaits, norādīts ar `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
