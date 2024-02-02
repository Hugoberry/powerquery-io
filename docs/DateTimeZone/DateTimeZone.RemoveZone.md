---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


## Description

Removes timezone information from the given datetimezone value.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Details

Returns a #datetime value from <code>dateTimeZone</code> with timezone information removed.


## Examples

### Example #1 
Remove timezone information from the value  #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
