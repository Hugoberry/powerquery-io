---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Menghasilkan data berisi bagian nilai datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Mengembalikan data berisi bagian dari nilai datetimezone tertentu, <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: Nilai <code>datetimezone</code> yang data pada bagiannya akan dihitung.</li>      </ul>


## Examples

### Example #1 
Mengkonversi nilai &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; ke data berisi nilai Tanggal, Waktu, dan Zona.
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
