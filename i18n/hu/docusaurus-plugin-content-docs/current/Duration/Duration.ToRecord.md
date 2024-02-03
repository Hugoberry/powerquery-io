---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Egy olyan rekordot ad vissza, amely tartalmazza az időtartam részeit.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Egy olyan rekordot ad vissza, amely tartalmazza a(z) <code>duration</code> időtartamérték részeit.  <ul>        <li><code>duration</code>: Egy <code>duration</code> típusú érték, amelyből a rekord létre lesz hozva.</li>      </ul>


## Examples

### Example #1 
A &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; érték konvertálása az azt alkotó részeket – adott esetben napokat, órákat, perceket és másodperceket – tartalmazó rekordra
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
