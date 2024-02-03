---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Egy olyan rekordot ad vissza, amely tartalmazza a datetimezone érték részeit.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Egy olyan rekordot ad vissza, amely tartalmazza a megadott <code>dateTimeZone</code> datetimezone érték részeit. <ul>        <li><code>dateTimeZone</code>: Egy <code>datetimezone</code> érték, amelyből a részeit tartalmazó rekord ki lesz számítva.</li>      </ul>


## Examples

### Example #1 
A &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; érték konvertálása egy olyan rekordra, amely tartalmazza a dátum, az idő és az időzóna értékét
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
