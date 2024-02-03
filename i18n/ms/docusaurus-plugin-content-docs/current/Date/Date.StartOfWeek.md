---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Mengembalikan permulaan minggu.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Mengembalikan permulaan minggu yang mengandungi <code>dateTime</code>.    <code>dateTime</code> mesti nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code>.


## Examples

### Example #1 
Cari permulaan minggu untuk Selasa, 11 Oktober 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Cari permulaan minggu untuk Selasa, 11 Oktober 2011, menggunakan Isnin sebagai permulaan minggu.
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
