---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

Menghasilkan awal bulan.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

Mengembalikan awal bulan yang berisi <code>dateTime</code>.    <code>dateTime</code> harus berupa nilai <code>date</code> atau <code>datetime</code>.


## Examples

### Example #1 
Temukan awal bulan untuk 10 Oktober 2011, 8:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
