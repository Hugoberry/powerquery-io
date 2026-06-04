---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Elimină informaţiile despre fusul orar din valoarea datetimezone dată.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Returnează o valoare #datetime din `dateTimeZone` cu informaţiile legate de fusul orar eliminate.


## Examples

### Example #1
Elimină informaţiile despre fusul orar din valoarea #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
