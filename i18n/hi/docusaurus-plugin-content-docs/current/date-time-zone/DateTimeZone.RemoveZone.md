---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


समय क्षेत्र जानकारी को दिए गए datetimezone मान से निकाल देता है.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

समय क्षेत्र जानकारी को निकालकर <code>dateTimeZone</code> से #datetime मान लौटाता है.


## Examples

### Example #1 
मान #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0) से समय क्षेत्र जानकारी निकालें.
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
