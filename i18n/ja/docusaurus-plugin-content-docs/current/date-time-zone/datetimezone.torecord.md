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

指定された datetimezone 値 (<code>dateTimeZone</code>) の部分を含むレコードを返します。 <ul>        <li><code>dateTimeZone</code>: その部分のレコードが計算される <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; 値を、日付、時刻、およびゾーン値を含むレコードに変換します。
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
