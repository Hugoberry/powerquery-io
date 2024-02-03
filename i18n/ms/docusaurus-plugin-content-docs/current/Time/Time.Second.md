---
title: Time.Second
---

# Time.Second


## Description

Mengembalikan komponen saat.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Mengembalikan komponen saat bagi nilai <code>time</code>, <code>datetime</code> atau <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Cari nilai kedua daripada nilai tarikhmasa.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
