---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Menghasilkan awal minggu.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Mengembalikan awal minggu yang berisi <code>dateTime</code>.    <code>dateTime</code> harus berupa <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> value.


## Examples

### Example #1 
Mencari awal minggu untuk Selasa, 11 Oktober 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Mencari awal minggu untuk Selasa, 11 Oktober 2011, menggunakan Senin sebagai awal minggu.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
