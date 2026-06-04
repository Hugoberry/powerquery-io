---
title: Date.AddDays
---

# Date.AddDays


Menambah hari yang ditentukan pada tarikh.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Mengembalikan hasil `date`, `datetime` atau `datetimezone` daripada menambah `numberOfDays` hari pada nilai `datetime` `dateTime`.

-   `dateTime`: Nilai `date`, `datetime` atau `datetimezone` pada yang mana hari ditambah.
-   `numberOfDays`: Bilangan hari untuk ditambah.


## Examples

### Example #1
Tambah 5 hari pada nilai `date`, `datetime` atau `datetimezone` mewakili tarikh 5/14/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
