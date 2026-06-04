---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Menghasilkan akhir minggu.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Mengembalikan akhir minggu yang berisi `dateTime`. Fungsi ini menerima parameter opsional `Day`,`firstDayOfWeek`, untuk ditetapkan sebagai hari pertama dalam seminggu untuk perhitungan relatif ini. Nilai default adalah `Day.Sunday`.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang digunakan untuk menghitung hari terakhir dalam seminggu
-   `firstDayOfWeek`: *(Opsional)* Nilai `Day.Type` yang mewakili hari pertama dalam seminggu. Nilai yang mungkin adalah `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` dan `Day.Saturday`. Nilai default adalah `Day.Sunday`.


## Examples

### Example #1
Mengambil akhir pekan untuk 5/14/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Mengambil akhir pekan untuk 5/17/2011 05:00:00 PM -7:00, dengan Minggu sebagai hari pertama dalam pekan.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
