---
title: DateTime.Date
---

# DateTime.Date


## Description

Осы date, datetime немесе datetimezone мәнінің күн құрамдасын қайтарады.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Осы <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәнінің <code>dateTime</code> күн құрамдасын қайтарады.


## Examples

### Example #1 
#datetime(2010, 12, 31, 11, 56, 02) күн мәнін табу.
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
