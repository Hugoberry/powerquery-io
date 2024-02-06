---
title: DateTime.AddZone
---

# DateTime.AddZone


將時區資訊新增至日期/時間值。


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

將時區資訊新增至 <code>dateTime</code> 值中。時區資訊包括 <code>timezoneHours</code> 和 <code>timezoneMinutes</code> (選擇性)，它們指定與 UTC 時間的所需時差。


## Examples

### Example #1 
將時區設定為 UTC+7:30 (UTC 後 7 小時 30 分鐘)。
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
