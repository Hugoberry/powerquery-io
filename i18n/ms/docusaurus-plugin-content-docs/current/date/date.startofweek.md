---
title: Date.StartOfWeek
---

# Date.StartOfWeek


Mengembalikan permulaan minggu.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Mengembalikan permulaan minggu yang mengandungi `dateTime`. `dateTime` mesti nilai `date`, `datetime` atau `datetimezone`.


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
