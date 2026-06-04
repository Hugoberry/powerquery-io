---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Atgriež mēneša beigas.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

Atgriež mēneša beigas vērtībā, kas satur `dateTime`.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtību, no kuras tiek aprēķinātas mēneša beigas.


## Examples

### Example #1
Iegūstiet mēneša beigas vērtībai 14.05.2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2
Iegūstiet mēneša beigas vērtībai 17.05.2011. plkst. 17:00:00 -7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
