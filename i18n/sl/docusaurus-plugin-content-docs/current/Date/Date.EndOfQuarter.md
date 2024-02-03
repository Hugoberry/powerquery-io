---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Vrne konec četrtletja.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Vrne konec četrtletja, ki vsebuje <code>dateTime</code>. Informacije o časovnem pasu so ohranjene.      <ul>        <li><code>dateTime</code>: vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, na podlagi katere je izračunan konec četrtletja.</li>      </ul>


## Examples

### Example #1 
Poiščite konec četrtletja za 10. oktober 2011, 8.00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
