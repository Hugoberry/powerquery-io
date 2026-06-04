---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Sniegtajā datetimezone vērtībā noņem informāciju par laika joslu.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Atgriež #datetime vērtību no `dateTimeZone`, kur noņemta informācija par laika joslu.


## Examples

### Example #1
Noņemiet informāciju par laika joslu no vērtības #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
