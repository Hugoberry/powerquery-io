---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Retourneert het begin van de maand.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Retourneert het begin van de maand die <code>dateTime</code>bevat. <code>dateTime</code> moet een <code>datum</code>- of <code>datum/tijd</code>-waarde zijn.


## Examples

### Example #1 
Het begin van de maand zoeken voor 10 oktober, 2011, 8:10:32 uur.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
