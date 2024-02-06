---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


更改此值的时区。


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

将针对 datetimezone 值 <code>dateTimeZone</code> 的时区信息更改为 <code>timezoneHours</code> 和 <code>timezoneMinutes</code> (可选)提供的新时区信息。    如果 <code>dateTimeZone</code> 没有时区部分，将引发异常。


## Examples

### Example #1 
将 #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) 的时区信息更改为 8 小时。
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
将 #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) 的时区信息更改为 -30 分钟。
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
