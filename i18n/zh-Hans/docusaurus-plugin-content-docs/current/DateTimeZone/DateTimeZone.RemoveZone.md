---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


从给定 datetimezone 值中删除时区信息。


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

从 <code>dateTimeZone</code> 返回 #datetime 值并且删除时区信息。


## Examples

### Example #1 
从值 #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0) 中删除时区信息。
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
