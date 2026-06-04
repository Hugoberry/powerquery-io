---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Menghasilkan akhir bulan.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

Mengembalikan akhir bulan yang berisi `dateTime`.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang digunakan untuk menghitung akhir bulan.


## Examples

### Example #1
Mengambil akhir bulan untuk 5/14/2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2
Mengambil akhir bulan untuk 5/17/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
