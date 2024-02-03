---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Menghasilkan awal tahun.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Mengembalikan awal tahun yang berisi <code>dateTime</code>.    <code>dateTime</code> harus berupa <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> value.


## Examples

### Example #1 
Temukan awal tahun untuk 10 Oktober 2011, 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
