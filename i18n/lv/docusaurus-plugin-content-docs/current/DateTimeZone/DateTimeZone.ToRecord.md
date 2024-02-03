---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Atgriež ierakstu, kurā ir datetimezone vērtības daļas.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Atgriež ierakstu, kurā ir daļas no norādītās datetime vērtības <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: <code>datetime</code> vērtība, no kuras tiek aprēķināts tās daļu ieraksts.</li>      </ul>


## Examples

### Example #1 
Pārveidojiet vērtību &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; par ierakstu, kas ietver vērtības Datums, Laiks un Josla.
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
