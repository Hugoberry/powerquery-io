---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Indică dacă această dată cade într-un an bisect.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Indică dacă valoarea datetime dată `dateTime` cade într-un an bisect.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` de evaluat.


## Examples

### Example #1
Determinaţi dacă anul 2012, reprezentat de `#date(2012, 01, 01)` este un an bisect.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
