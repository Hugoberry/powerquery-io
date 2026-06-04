---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Vraća broj koji pokazuje u kom se kvartalu u godini datum nalazi.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Vraća broj od 1 do 4 koji pokazuje u kom se kvartalu u godini datum `dateTime` nalazi. `dateTime` može da bude vrednost `date`, `datetime` ili `datetimezone`.


## Examples

### Example #1
Pronalaženje kvartala u godini u kome se nalazi datum #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
