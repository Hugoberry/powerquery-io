---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


傳回一筆包含 datetimezone 值各部分的記錄。


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

傳回記錄，內含指定的 datetimezone 值 `dateTimeZone` 各部分。

-   `dateTimeZone`: 要從中計算其各部分記錄的 `datetimezone` 值。


## Examples

### Example #1
將 `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` 值轉換成包含日期、時間和時區值的記錄。
```powerquery
DateTimeZone.ToRecord(#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2,
      ZoneHours = 8,
      ZoneMinutes = 0
]
```




## Category
DateTimeZone
