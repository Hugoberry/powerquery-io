---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Egy olyan rekordot ad vissza, amely tartalmazza a datetime érték részeit.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Egy olyan rekordot ad vissza, amely tartalmazza a megadott <code>dateTime</code> datetime érték részeit. <ul>        <li><code>dateTime</code>: Egy <code>datetime</code> érték, amelyből a részeit tartalmazó rekord számítandó.</li>      </ul>


## Examples

### Example #1 
A &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; érték konvertálása egy olyan rekordra, amely tartalmazza a dátum és az idő értékét
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
