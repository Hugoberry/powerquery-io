---
title: Date.AddWeeks
---

# Date.AddWeeks


Menambah minggu yang ditentukan pada tarikh.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Mengembalikan hasil `date`, `datetime` atau `datetimezone` daripada menambah `numberOfWeeks` minggu pada nilai `datetime` `dateTime`.

-   `dateTime`: Nilai `date`, `datetime` atau `datetimezone` pada yang mana minggu ditambah.
-   `numberOfWeeks`: Bilangan minggu untuk ditambah.


## Examples

### Example #1
Tambah 2 minggu pada nilai `date`, `datetime` atau `datetimezone` mewakili tarikh 5/14/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
