---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Gibt einen Datensatz mit den Teilen des datetimezone-Werts zurück.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Gibt einen Datensatz mit den Teilen des angegebenen datetimezone-Werts (<code>dateTimeZone</code>) zurück. <ul>        <li><code>dateTimeZone</code>: Ein <code>datetimezone</code>-Wert, auf dessen Grundlage der Datensatz mit den zugehörigen Teilen berechnet werden soll.</li>      </ul>


## Examples

### Example #1 
Konvertiert den Wert &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; in einen Datensatz mit Datums-, Uhrzeit- und Zeitzonenwerten.
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
