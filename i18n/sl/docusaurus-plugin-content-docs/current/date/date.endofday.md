---
title: Date.EndOfDay
---

# Date.EndOfDay


Vrne konec dneva.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

Vrne konec dneva, ki je prikazan kot `dateTime`. Informacije o časovnem pasu so ohranjene.

-   `dateTime`: vrednost `date`, `datetime` ali `datetimezone`, na podlagi katere je izračunan konec dneva.


## Examples

### Example #1
Poiščite konec dneva za 5/14/2011 05:00:00 PM.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2
Poiščite konec dneva za 5/17/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
