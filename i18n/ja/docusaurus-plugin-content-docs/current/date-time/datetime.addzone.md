---
title: DateTime.AddZone
---

# DateTime.AddZone


タイム ゾーン情報を datetime 値に追加します。


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

タイム ゾーン情報を <code>dateTime</code> 値に追加します。タイムゾーン情報には <code>timezoneHours</code> が含まれており、必要に応じて <code>timezoneMinutes</code> が含まれます。これにより、UTC 時刻からのオフセットが指定されます。


## Examples

### Example #1 
タイムゾーンを UTC+7:30 (UTC から 7 時間 30 分後) に設定してください。
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
