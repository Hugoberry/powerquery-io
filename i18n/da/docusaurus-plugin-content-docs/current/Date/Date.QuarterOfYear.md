---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Returnerer et tal, der angiver, hvilket kvartal i året datoen ligger i.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Returnerer et tal fra 1-4, der angiver, hvilket kvartal i året datoen <code>dateTime</code> ligger i. <code>dateTime</code> kan være en værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>.


## Examples

### Example #1 
Se, hvilket kvartal i året datoen #date(2011, 12, 31) ligger i.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
