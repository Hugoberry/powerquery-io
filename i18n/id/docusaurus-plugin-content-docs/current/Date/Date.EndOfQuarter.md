---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Menghasilkan akhir kuartal.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Mengembalikan akhir kuartal yang berisi <code>dateTime</code>. Informasi zona waktu dipertahankan.      <ul>      <li><code>dateTime</code>: <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> nilai akhir kuartal dihitung.</li>      </ul>


## Examples

### Example #1 
Temukan akhir kuartal untuk 10 Oktober 2011, 08.00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
