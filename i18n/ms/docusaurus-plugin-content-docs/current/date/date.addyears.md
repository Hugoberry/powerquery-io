---
title: Date.AddYears
---

# Date.AddYears


Menambah tahun yang ditentukan pada tarikh.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Mengembalikan hasil `date`, `datetime` atau `datetimezone` daripada menambah `numberOfYears` pada nilai `datetime` `dateTime`.

-   `dateTime`: Nilai `date`, `datetime` atau `datetimezone` pada yang mana tahun ditambah.
-   `numberOfYears`: Bilangan tahun untuk ditambah.


## Examples

### Example #1
Tambah 4 tahun pada nilai `date`, `datetime` atau `datetimezone` mewakili tarikh 5/14/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Tambah 10 tahun pada nilai `date`, `datetime` atau `datetimezone` mewakili tarikh dan masa 5/14/2011 5/14/2011 08:15:22 AM.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
