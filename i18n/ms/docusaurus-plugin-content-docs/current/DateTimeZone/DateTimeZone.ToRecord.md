---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Mengembalikan rekod yang mengandungi bahagian nilai datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Mengembalikan rekod yang mengandungi sebahagian nilai datetimezone yang ditentukan <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: A <code>Nilai datetimezone</code> untuk yang mana rekod bahagiannya akan dikira.</li>      </ul>


## Examples

### Example #1 
Tukarkan nilai &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; kepada rekod yang mengandungi nilai Tarikh, Masa dan Zon.
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
