---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Atgriež skaitli no 1 līdz 6, kas norāda, kurā mēneša nedēļā iekrīt šis datums.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Atgriež skaitli no 1 līdz 6, kas norāda, kurā mēneša nedēļā iekrīt datums `dateTime`.

-   `dateTime`: `datetime` vērtība, kurai tiek noteikta mēneša nedēļas vērtība.


## Examples

### Example #1
Nosakiet, kurā 2011. gada marta nedēļā ir 15. datums.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
