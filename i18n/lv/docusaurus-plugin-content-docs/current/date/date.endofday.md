---
title: Date.EndOfDay
---

# Date.EndOfDay


Atgriež dienas beigas.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

Atgriež dienas beigas, kas apzīmēts ar `dateTime`. Informācija par laika joslu tiek saglabāta.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, no kuras tiek aprēķinātas dienas beigas.


## Examples

### Example #1
Iegūstiet dienas beigas vērtībai 14.05.2011. plkst. 17:00:00.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2
Iegūstiet dienas beigas vērtībai 17.05.2011. plkst. 17:00:00 -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
