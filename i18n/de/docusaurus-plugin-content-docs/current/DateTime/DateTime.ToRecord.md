---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Gibt einen Datensatz mit den Teilen des datetime-Werts zurück.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Gibt einen Datensatz mit den Teilen des angegebenen datetime-Werts (<code>dateTime</code>) zurück. <ul>        <li><code>dateTime</code>: Ein <code>datetime</code>-Wert, auf dessen Grundlage der Datensatz mit den zugehörigen Teilen berechnet werden soll.</li>      </ul>


## Examples

### Example #1 
Konvertiert den Wert &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; in einen Datensatz mit Datums- und Uhrzeitwerten.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
