---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Mengembalikan permulaan suku.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Mengembalikan permulaan suku yang mengandungi <code>dateTime</code>.      <code>dateTime</code> mesti nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code>.


## Examples

### Example #1 
Cari permulaan suku bagi 10 Oktober 2011, 8:00PG.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
