---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Palauttaa tietueen, joka sisältää keston osat.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Palauttaa tietueen, joka sisältää kestoarvon <code>duration</code> osat.   <ul>        <li><code>duration</code>: <code>duration</code>, josta tietue luodaan.</li>      </ul>


## Examples

### Example #1 
Muunna &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; sen osien tietueeksi, mukaan lukien päivät, tunnit, minuutit ja sekunnit tilanteen mukaan.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
