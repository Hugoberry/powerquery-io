---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Devuelve un registro que contiene los elementos del valor de datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Devuelve un registro que contiene los elementos del valor datetimezone especificado, <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: un valor <code>datetimezone</code> a partir del cual se calculará el registro de sus partes.</li>      </ul>


## Examples

### Example #1 
Convertir el valor &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; en un registro que contenga valores de fecha, hora y zona.
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
