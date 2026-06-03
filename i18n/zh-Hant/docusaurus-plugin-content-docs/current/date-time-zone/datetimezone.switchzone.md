---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


變更值的時區。


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

將 datetimezone 值 `dateTimeZone` 的時區資訊變更成 `timezoneHours` 及選用的 `timezoneMinutes` 所提供的新時區資訊。 如果 `dateTimeZone` 沒有時區元件，則會引發錯誤。


## Examples

### Example #1
將 #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) 的時區資訊變更為 8 小時。
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
將 #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) 的時區資訊變更為 -30 分鐘。
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
