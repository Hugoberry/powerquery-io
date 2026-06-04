---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Vrne konec četrtletja.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Vrne konec četrtletja, ki vsebuje `dateTime`. Informacije o časovnem pasu so ohranjene.

-   `dateTime`: vrednost `date`, `datetime` ali `datetimezone`, na podlagi katere je izračunan konec četrtletja.


## Examples

### Example #1
Poiščite konec četrtletja za 10. oktober 2011, 8.00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
