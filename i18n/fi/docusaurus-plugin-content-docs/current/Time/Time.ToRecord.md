---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Palauttaa tietueen, joka sisältää Time-arvon osat.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Palauttaa tietueen, joka sisältää annetun Time-arvon <code>time</code> osat. <ul>        <li><code>time</code>: <code>time</code>-arvo, josta sen osien tietue lasketaan.</li>      </ul>


## Examples

### Example #1 
Muunna &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; -arvo tietueeksi, joka sisältää Time-arvot.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
