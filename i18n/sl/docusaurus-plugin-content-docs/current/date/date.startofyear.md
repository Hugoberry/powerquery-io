---
title: Date.StartOfYear
---

# Date.StartOfYear


Vrne začetek leta.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Vrne začetek leta, ki vsebuje `dateTime`. `dateTime` mora biti vrednost `date`, `datetime` ali `datetimezone`.


## Examples

### Example #1
Poiščite začetek leta za 10. oktober 2011, 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
