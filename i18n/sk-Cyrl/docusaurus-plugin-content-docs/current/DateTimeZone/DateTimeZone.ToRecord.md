---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Vráti záznam obsahujúci časti hodnoty datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Vráti záznam obsahujúci časti danej hodnoty datetimezone <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: Hodnota <code>datetimezone</code>, z ktorej častí sa vypočíta príslušný záznam.</li>      </ul>


## Examples

### Example #1 
Konvertuje hodnotu &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; na záznam obsahujúci hodnoty Dátum, Čas a Pásmo.
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
