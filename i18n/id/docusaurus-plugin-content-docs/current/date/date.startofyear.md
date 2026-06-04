---
title: Date.StartOfYear
---

# Date.StartOfYear


Menghasilkan awal tahun.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Mengembalikan awal tahun yang berisi `dateTime`. `dateTime` harus berupa `date`, `datetime`, atau `datetimezone` value.


## Examples

### Example #1
Temukan awal tahun untuk 10 Oktober 2011, 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
