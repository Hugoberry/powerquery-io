---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

Converts the timezone component to UTC timezone.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Changes timezone information of the datetime value <code>dateTimeZone</code> to the UTC or Universal Time timezone information.    If <code>dateTimeZone</code> does not have a timezone component, the UTC timezone information is added.


## Examples

### Example #1 
Change timezone information for #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) to UTC timezone.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
