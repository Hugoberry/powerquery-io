---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Mengembalikan penghujung suku.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Mengembalikan penghujung suku yang mengandungi <code>dateTime</code>. Maklumat zon waktu dikekalkan.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> untuk mengira penghujung suku.</li>      </ul>


## Examples

### Example #1 
Cari penghujung suku bagi 10 Oktober 2011, 8:00PG.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
