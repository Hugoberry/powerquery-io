---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


将时区部分转换为 UTC 时区。


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

将日期时间值 <code>dateTimeZone</code> 的时区信息更改为 UTC 或通用协调时间时区信息。    如果 <code>dateTimeZone</code> 不具有时区部分，则添加 UTC 时区信息。


## Examples

### Example #1 
将 #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) 的时区信息更改为 UTC 时区。
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
