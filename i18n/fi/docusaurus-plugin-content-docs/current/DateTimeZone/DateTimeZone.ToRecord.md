---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Palauttaa tietueen, joka sisältää datetimezone-arvon osat.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Palauttaa tietueen, joka sisältää annetun datetimezone-arvon <code>dateTimeZone</code> osat. <ul>        <li><code>dateTimeZone</code>: <code>datetimezone</code>-arvo, josta sen osien tietue lasketaan.</li>      </ul>


## Examples

### Example #1 
Muunna &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; -arvo tietueeksi, joka sisältää Date-, Time- ja Zone-arvot.
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
