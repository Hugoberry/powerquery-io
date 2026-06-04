---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Iš pateiktos datos ir laiko juostos reikšmės pašalinama laiko juostos informacija.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

#datetime reikšmė pateikiama iš `dateTimeZone` su pašalinta laiko juostos informacija.


## Examples

### Example #1
Pašalinkite laiko juostos informaciją iš reikšmės #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
