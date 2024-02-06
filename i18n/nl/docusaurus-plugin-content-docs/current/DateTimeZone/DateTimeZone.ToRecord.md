---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Retourneert een record die onderdelen van de datum-/tijdzonewaarde bevat.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Hiermee wordt een record geretourneerd met de onderdelen van de opgegeven datetimezone-waarde, <code>dateTimeZone</code>. <ul> <li><code>dateTimeZone</code>: een <code>datetimezone</code>-waarde op basis waarvan de record of de onderdelen daarvan moeten worden berekend.</li> </ul>


## Examples

### Example #1 
De waarde voor de &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; omzetten naar een record die waarden voor datum, tijd en zone bevat.
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
