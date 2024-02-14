---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Restituisce un numero che indica il trimestre dell&#39;anno in cui cade la data.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Restituisce un numero da 1 a 4 che indica il trimestre dell'anno in cui cade la data <code>dateTime</code>. <code>dateTime</code> può essere un valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.


## Examples

### Example #1 
Trovare in quale trimestre dell&#39;anno cade #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
