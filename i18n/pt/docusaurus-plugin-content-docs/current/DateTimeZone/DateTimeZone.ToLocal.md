---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Converts the timezone component to the local timezone.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Changes timezone information of the datetimezone value <code>dateTimeZone</code> to the local timezone information.    If <code>dateTimeZone</code> does not have a timezone component, the local timezone information is added.


## Examples

### Example #1 
Change timezone information for #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) to local timezone (assuming PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
