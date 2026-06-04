---
title: Time.StartOfHour
---

# Time.StartOfHour


Az óra kezdetét adja vissza.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

A következő által jelölt óra kezdetét adja vissza: `dateTime`. A(z) `dateTime` csak `date`, `datetime` vagy `datetimezone` típusú érték lehet.


## Examples

### Example #1
Az óra kezdetének megállapítása 2011. október 10., 8:10:32 esetén.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
