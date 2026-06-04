---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Menghasilkan awal kuartal.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Mengembalikan awal kuartal yang berisi `dateTime`. `dateTime` harus berupa `date`, `datetime`, atau `datetimezone` value.


## Examples

### Example #1
Temukan awal kuartal untuk 10 Oktober 2011, 08.00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
