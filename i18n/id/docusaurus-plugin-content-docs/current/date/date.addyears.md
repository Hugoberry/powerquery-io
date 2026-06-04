---
title: Date.AddYears
---

# Date.AddYears


Menambahkan tahun yang ditetapkan ke tanggal.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Mengembalikan hasil `date`, `datetime`, atau `datetimezone` dari penambahan `numberOfYears` ke nilai `datetime` `dateTime`.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang menambahkan tahun.
-   `numberOfYears`: Jumlah tahun yang akan ditambahkan.


## Examples

### Example #1
Menambahkan 4 tahun ke nilai `date`, `datetime`, atau `datetimezone` yang menunjukkan tanggal 5/14/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Menambahkan 10 tahun ke nilai `date`, `datetime`, atau `datetimezone` yang menunjukkan tanggal dan waktu 5/14/2011 08:15:22 AM.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
