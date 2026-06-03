---
title: DateTime.Date
---

# DateTime.Date


Returns the date component of the given date, datetime, or datetimezone value.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Returns the date component of the `dateTime` parameter if the parameter is a `date`, `datetime`, or `datetimezone` value, or `null` if the parameter is `null`.


## Examples

### Example #1
Find date value of #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
