---
title: Time.Minute
---

# Time.Minute


## Description

Mengembalikan komponen minit.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Mengembalikan komponen minit bagi nilai <code>time</code>, <code>datetime</code> atau <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Cari minit dalam #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
