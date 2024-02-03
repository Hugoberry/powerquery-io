---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Restituisce record contenente le parti del valore datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Restituisce un record contenente le parti del valore datetimezone specificato <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: valore <code>datetimezone</code> da cui deve essere calcolato il record delle parti.</li>      </ul>


## Examples

### Example #1 
Converte il valore &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; in un record contenente i valori di data, ora e fuso orario.
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
