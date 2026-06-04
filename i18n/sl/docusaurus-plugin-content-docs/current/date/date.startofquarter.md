---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Vrne začetek četrtletja.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Vrne začetek četrtletja, ki vsebuje `dateTime`. `dateTime` mora biti vrednost `date`, `datetime` ali `datetimezone`.


## Examples

### Example #1
Poiščite začetek četrtletja za 10. oktober 2011, 8.00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
