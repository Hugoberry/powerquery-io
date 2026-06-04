---
title: Date.StartOfDay
---

# Date.StartOfDay


Vrne začetek dneva.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Vrne začetek dneva, ki je prikazan kot `dateTime`. `dateTime` mora biti vrednost `date`, `datetime` ali `datetimezone`.


## Examples

### Example #1
Poiščite začetek dneva za 10. oktober 2011, 8.00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
