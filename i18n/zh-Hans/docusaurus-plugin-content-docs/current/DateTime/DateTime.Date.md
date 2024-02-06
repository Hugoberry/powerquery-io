---
title: DateTime.Date
---

# DateTime.Date


返回给定 date、datetime 或 datetimezone 值的日期部分。


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

返回 <code>dateTime</code> 以及给定 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值的日期部分。


## Examples

### Example #1 
查找 #datetime(2010, 12, 31, 11, 56, 02) 的日期值。
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
