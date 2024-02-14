---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Returnerar en post som innehåller delarna i datetimezone-värdet.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Returnerar en post som innehåller delarna i det angivna datetimezone-värdet <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: Ett <code>datetimezone</code>-värde som posten med värdets delar ska beräknas från.</li>      </ul>


## Examples

### Example #1 
Konvertera &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt;-värdet till en post som innehåller datum-, tids- och zonvärden.
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
