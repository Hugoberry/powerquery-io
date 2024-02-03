---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Menghasilkan awal jam.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Mengembalikan awal jam yang ditunjukkan oleh <code>dateTime</code>.    <code>dateTime</code> harus berupa <code>time</code>, <code>datetime</code> atau <code>datetimezone</code> value.


## Examples

### Example #1 
Temukan awal jam untuk 10 Oktober 2011, 8:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
