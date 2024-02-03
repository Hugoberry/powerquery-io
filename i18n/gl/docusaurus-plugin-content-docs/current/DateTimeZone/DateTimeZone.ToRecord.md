---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Devolve un rexistro que contén partes do valor de data, hora e fuso.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Devolve un rexistro que contén as partes do valor datetimezone indicado, <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: un valor <code>datetimezone</code> a partir do que se debe calcular o rexistro das súas partes.</li>      </ul>


## Examples

### Example #1 
Converter o valor &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; nun rexistro que contén os valores de data, hora e fuso.
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
