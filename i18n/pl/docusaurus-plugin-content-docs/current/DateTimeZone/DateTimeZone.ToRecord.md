---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Zwraca rekord zawierający części wartości typu datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Zwraca rekord zawierający części danej wartości typu datetimezone (<code>dateTimeZone</code>). <ul>        <li><code>dateTimeZone</code>: wartość typu <code>datetimezone</code>, na podstawie części której jest tworzony rekord.</li>      </ul>


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; na rekord zawierający wartości daty, godziny i strefy.
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
