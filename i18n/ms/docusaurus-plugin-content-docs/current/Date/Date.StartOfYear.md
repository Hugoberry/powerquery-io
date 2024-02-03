---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Mengembalikan permulaan tahun.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Mengembalikan permulaan tahun yang mengandungi <code>dateTime</code>.    <code>dateTime</code> mesti nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code>.


## Examples

### Example #1 
Cari permulaan tahun bagi 10 Oktober 2011, 8:10:32PG.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
