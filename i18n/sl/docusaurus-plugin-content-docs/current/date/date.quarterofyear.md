---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Vrne število, ki kaže, v katerem četrtletju je datum.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Vrne število od 1 do 4, ki kaže, v katerem četrtletju je datum `dateTime`. `dateTime` je lahko vrednost `date`, `datetime` ali `datetimezone`.


## Examples

### Example #1
Poiščite, v katerem četrtletju je datum #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
