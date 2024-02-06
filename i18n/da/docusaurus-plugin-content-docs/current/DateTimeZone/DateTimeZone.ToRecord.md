---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Returnerer en post, der indeholder delene fra værdien af typen datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Returnerer en post, der indeholder delene fra en bestemt værdi af typen datetimezone, <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: En værdi af typen <code>datetimezone</code>, som delenes post skal beregnes ud fra.</li>      </ul>


## Examples

### Example #1 
Konvertér værdien af typen &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; til en post, der indeholder værdier af typen Date, Time og Zone.
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
