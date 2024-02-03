---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Mengembalikan permulaan hari.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

Mengembalikan permulaan hari yang diwakili oleh <code>dateTime</code>.    <code>dateTime</code> mesti nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code>.


## Examples

### Example #1 
Cari permulaan hari bagi 10 Oktober 2011, 8:00PG.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
