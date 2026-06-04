---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Pateikiamas skaičius, rodantis, į kurį metų ketvirtį patenka data.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Pateikiamas skaičius nuo 1 iki 4, rodantis, į kurį metų ketvirtį patenka data `dateTime`. `dateTime` gali būti `date`, `datetime` arba `datetimezone` reikšmė.


## Examples

### Example #1
Rasti, į kurį metų ketvirtį patenka data #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
