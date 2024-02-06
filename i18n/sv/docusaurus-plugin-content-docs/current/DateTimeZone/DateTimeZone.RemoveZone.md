---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Tar bort informationen om tidszonen från datetimezone-värdet.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Returnerar ett #datetime-värde från <code>dateTimeZone</code> där informationen om tidszonen har tagits bort.


## Examples

### Example #1 
Ta bort informationen om tidszonen från värdet #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
