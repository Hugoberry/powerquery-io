---
title: Date.Day
---

# Date.Day


Menghasilkan komponen hari.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Mengembalikan komponen hari pada nilai `date`, `datetime`, atau `datetimezone`.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang akan mengekstrak komponen hari.


## Examples

### Example #1
Mengambil komponen hari dari nilai `date`, `datetime`, atau `datetimezone` yang menunjukkan tanggal dan waktu 5/14/2011 05:00:00 PM.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
