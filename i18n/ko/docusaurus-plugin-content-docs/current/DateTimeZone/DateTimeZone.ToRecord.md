---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

datetimezone 값의 일부를 포함하는 레코드를 반환합니다.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

지정된 datetimezone 값 <code>dateTimeZone</code>의 일부를 포함하는 레코드를 반환합니다. <ul>        <li><code>dateTimeZone</code>: 일부분의 레코드를 계산할 <code>datetimezone</code> 값입니다.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; 값을 Date, Time 및 Zone 값을 포함하는 레코드로 변환합니다.
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
