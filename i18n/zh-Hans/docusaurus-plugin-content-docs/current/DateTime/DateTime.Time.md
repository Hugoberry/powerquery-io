---
title: DateTime.Time
---

# DateTime.Time


返回给定日期时间值的时间部分。


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Remarks

返回给定日期时间值 <code>dateTime</code> 的时间部分。


## Examples

### Example #1 
查找 #datetime(2010, 12, 31, 11, 56, 02) 的时间值。
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
