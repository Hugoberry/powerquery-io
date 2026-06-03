---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


datetimezone 値の部分を含むレコードを返します。


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

指定された datetimezone 値 (`dateTimeZone`) の部分を含むレコードを返します。

-   `dateTimeZone`: その部分のレコードが計算される `datetimezone` 値。


## Examples

### Example #1
`#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` 値を、日付、時刻、およびゾーン値を含むレコードに変換します。
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
