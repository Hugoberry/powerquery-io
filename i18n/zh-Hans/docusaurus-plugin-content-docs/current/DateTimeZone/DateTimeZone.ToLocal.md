---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


将时区部分转换为本地时区。


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

将 datetimezone 值 <code>dateTimeZone</code> 的时区信息更改为本地时区信息。    如果 <code>dateTimeZone</code> 不具有时区部分，则添加本地时区信息。


## Examples

### Example #1 
将针对 #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) 的时区信息更改为本地时区(假定 PST)。
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
