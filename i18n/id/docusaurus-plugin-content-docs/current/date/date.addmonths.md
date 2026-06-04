---
title: Date.AddMonths
---

# Date.AddMonths


Menambahkan bulan yang ditetapkan ke tanggal.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Mengembalikan `date`, `datetime`, atau `datetimezone` dari penambahan `numberOfMonths` bulan ke nilai `datetime` `dateTime`.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang menambahkan bulan.
-   `numberOfMonths`: Jumlah bulan yang akan ditambahkan.


## Examples

### Example #1
Menambahkan 5 bulan ke nilai `date`, `datetime`, atau `datetimezone` yang menunjukkan tanggal 5/14/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Menambahkan 18 bulan ke nilai `date`, `datetime`, atau `datetimezone` yang menunjukkan tanggal dan waktu 5/14/2011 08:15:22 AM.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
