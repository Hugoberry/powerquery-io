---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Atgriež ierakstu, kurā ir datetime vērtības daļas.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Atgriež ierakstu, kurā ir daļas no norādītās datetime vērtības, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: <code>datetime</code> vērtība, no kuras tiek aprēķināts tās daļu ieraksts.</li>      </ul>


## Examples

### Example #1 
Pārveidojiet vērtību &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; par ierakstu, kas ietver vērtības Datums un Laiks.
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
