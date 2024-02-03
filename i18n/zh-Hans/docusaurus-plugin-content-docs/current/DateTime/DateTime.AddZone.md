---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

将时区信息添加到日期/时间值。


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

将时区信息添加到 <code>dateTime</code> 值。时区信息包括 <code>timezoneHours</code> 和可选的 <code>timezoneMinutes</code>，这指定了所需的 UTC 时间偏移量。


## Examples

### Example #1 
将时区设置为 UTC+7:30(超过 UTC 7 小时 30 分钟)。
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
