---
title: Time.Hour
---

# Time.Hour


## Description

Mengembalikan komponen jam.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Mengembalikan komponen jam bagi nilai <code>time</code>, <code>datetime</code> atau <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Cari jam dalam #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
