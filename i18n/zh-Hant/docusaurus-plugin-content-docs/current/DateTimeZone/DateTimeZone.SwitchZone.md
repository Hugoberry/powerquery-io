---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

變更值的時區。


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

將 datetimezone 值 <code>dateTimeZone</code> 的時區資訊變更成 <code>timezoneHours</code> (及選擇性的 <code>timezoneMinutes</code>) 所提供的新時區資訊。    如果 <code>dateTimeZone</code> 沒有時區元件，則擲回例外狀況。


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
