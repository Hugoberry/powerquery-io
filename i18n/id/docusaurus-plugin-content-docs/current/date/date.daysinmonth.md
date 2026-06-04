---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Menghasilkan angka mulai dari 28 hingga 31 yang menunjukkan angka hari dalam sebulan.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Mengembalikan jumlah hari dalam sebulan pada nilai `date`, `datetime`, atau `datetimezone` `dateTime`.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang menghasilkan jumlah hari dalam sebulan.


## Examples

### Example #1
Jumlah hari dalam bulan Desember seperti yang direpresentasikan oleh `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
