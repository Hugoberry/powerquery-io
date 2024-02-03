---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Palauttaa tietueen, joka sisältää päivämääräarvon osat.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Palauttaa tietueen, joka sisältää annetun päivämääräarvon <code>date</code> osat. <ul>        <li><code>date</code>: <code>date</code>-arvo, josta sen osien tietue lasketaan.</li>      </ul>


## Examples

### Example #1 
Muunna &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; -arvo tietueeksi, joka sisältää päivämääräarvon osat.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
