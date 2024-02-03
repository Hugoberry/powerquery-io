---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Returnează o înregistrare ce conţine părţi din valoarea datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Returnează o înregistrare care conține părți din valoarea datetimezone specificată, <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code>: o valoare <code>datetimezone</code> pentru care urmează să fie calculată înregistrarea părților sale.</li>      </ul>


## Examples

### Example #1 
Convertiţi valoarea &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; într-o înregistrare ce conţine valorile Date, Time şi Zone.
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
