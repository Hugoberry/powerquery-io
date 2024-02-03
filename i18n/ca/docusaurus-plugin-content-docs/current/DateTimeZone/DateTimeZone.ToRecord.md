---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Retorna un registre que conté les parts del valor datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Retorna un registre que conté les parts del valor datetimezone proporcionat, <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: valor <code>datetimezone</code> a partir del qual s'ha de calcular el registre de les seves parts.</li>      </ul>


## Examples

### Example #1 
Converteix el valor &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; en un registre que conté els valors de data, hora i fus.
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
