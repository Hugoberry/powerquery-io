---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Menghasilkan awal hari.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

Mengembalikan awal hari yang ditunjukkan oleh <code>dateTime</code>.    <code>dateTime</code> harus berupa <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> value.


## Examples

### Example #1 
Temukan awal hari untuk 10 Oktober 2011, 08:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
