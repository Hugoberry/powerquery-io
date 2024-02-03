---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


## Description

Sniegtajā datetimezone vērtībā noņem informāciju par laika joslu.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Details

Atgriež #datetime vērtību no <code>dateTimeZone</code>, kur noņemta informācija par laika joslu.


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
