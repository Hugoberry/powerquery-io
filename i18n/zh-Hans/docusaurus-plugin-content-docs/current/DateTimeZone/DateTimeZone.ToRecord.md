---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


返回包含 datetimezone 值的各个部分的记录。


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

返回包含给定 datetimezone 值 <code>dateTimeZone</code> 的各个部分的记录。 <ul>        <li><code>dateTimeZone</code>: 要从中计算其各个部分的记录的 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
将 &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; 值转换为包含日期、时间和时区值的记录。
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
