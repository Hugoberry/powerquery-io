---
title: Date.AddMonths
---

# Date.AddMonths


Menambah bulan yang ditentukan pada tarikh.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Mengembalikan hasil `date`, `datetime` atau `datetimezone` daripada menambah `numberOfMonths` bulan pada nilai `datetime` `dateTime`.

-   `dateTime`: Nilai `date`, `datetime` atau `datetimezone` pada yang mana bulan ditambah.
-   `numberOfMonths`: Bilangan bulan untuk ditambah.


## Examples

### Example #1
Tambah 5 bulan pada nilai `date`, `datetime` atau `datetimezone` mewakili tarikh 5/14/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Tambah 18 bulan pada nilai `date`, `datetime` atau `datetimezone` mewakili tarikh dan masa 5/14/2011 5/14/2011 08:15:22 AM.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
