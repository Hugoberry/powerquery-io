---
title: Date.AddDays
---

# Date.AddDays


Menambahkan hari yang ditetapkan ke tanggal.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Memberikan hasil `date`, `datetime`, atau `datetimezone` dari menambahkan `numberOfDays` hari ke nilai `datetime` `dateTime`.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang menambahkan hari.
-   `numberOfDays`: Jumlah hari yang akan ditambahkan.


## Examples

### Example #1
Menambahkan 5 hari ke nilai `date`, `datetime`, atau `datetimezone` yang menunjukkan tanggal 5/14/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
