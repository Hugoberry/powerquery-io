---
title: Date.AddQuarters
---

# Date.AddQuarters


Menambah suku yang ditentukan pada tarikh.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Mengembalikan hasil `date`, `datetime` atau `datetimezone` daripada menambah `numberOfQuarters` suku pada nilai `datetime` `dateTime`.

-   `dateTime`: Nilai `date`, `datetime` atau `datetimezone` pada yang mana suku ditambah.
-   `numberOfQuarters`: Bilangan suku untuk ditambah.


## Examples

### Example #1
Tambah 1 suku pada nilai `date`, `datetime` atau `datetimezone` mewakili tarikh 5/14/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
