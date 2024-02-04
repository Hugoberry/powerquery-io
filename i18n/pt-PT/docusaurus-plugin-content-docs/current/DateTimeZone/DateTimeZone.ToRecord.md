---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Devolve um registo que contém as partes do valor datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Devolve um registo que contém as partes do valor datetimezone especificado, <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: um valor <code>datetimezone</code> a partir do qual o registo das partes correspondentes deverá ser calculado.</li>      </ul>


## Examples

### Example #1 
Converter o valor &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; num registo que contém os valores Data, Hora e Zona.
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
