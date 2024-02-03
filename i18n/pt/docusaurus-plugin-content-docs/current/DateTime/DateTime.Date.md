---
title: DateTime.Date
---

# DateTime.Date


## Description

Returns the date component of the given date, datetime, or datetimezone value.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Returns the date component of <code>dateTime</code>, the given <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value.


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
