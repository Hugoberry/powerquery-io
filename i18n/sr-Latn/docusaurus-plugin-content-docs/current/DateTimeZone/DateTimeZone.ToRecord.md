---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Vraća zapis koji sadrži delove vrednosti datuma i vremenske zone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Vraća zapis koji sadrži delove date vrednosti datuma i vremenske zone, <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: Vrednost <code>datetimezone</code> na osnovu koje se izračunava zapis njenih delova.</li>      </ul>


## Examples

### Example #1 
Konvertovanje vrednosti &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; u zapis koji sadrži vrednosti datuma, vremena i zone.
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
