---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Palauttaa tietueen, joka sisältää datetime-arvon osat.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Palauttaa tietueen, joka sisältää annetun datetime-arvon <code>dateTime</code> osat. <ul>        <li><code>dateTime</code>: <code>datetime</code>-arvo, josta sen osien tietue lasketaan.</li>      </ul>


## Examples

### Example #1 
Muunna &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; -arvo tietueeksi, joka sisältää Date- ja Time-arvot.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
