---
title: Time.EndOfHour
---

# Time.EndOfHour


Vrne konec ure.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Vrne konec ure, ki je prikazan kot `dateTime` in vključuje z ulomki izražene sekunde. Informacije o časovnem pasu so ohranjene.

-   `dateTime`: vrednost `time`, `datetime` ali `datetimezone`, na podlagi katere je izračunan konec ure.


## Examples

### Example #1
Poiščite konec ure za 5/14/2011 05:00:00 PM.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
Poiščite konec ure za 5/17/2011 05:00:00 PM -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
