---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Menghasilkan akhir kuartal.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Mengembalikan akhir kuartal yang berisi `dateTime`. Informasi zona waktu dipertahankan.

-   `dateTime`: `date`, `datetime`, atau `datetimezone` nilai akhir kuartal dihitung.


## Examples

### Example #1
Temukan akhir kuartal untuk 10 Oktober 2011, 08.00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
