---
title: Date.StartOfDay
---

# Date.StartOfDay


Retourneert het begin van de dag.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Retourneert het begin van de dag vertegenwoordigd door <code>dateTime</code>. <code>dateTime</code> moet een <code>datum</code>-, <code>datum/tijd</code>- of <code>datum/tijdzone</code>-waarde zijn.


## Examples

### Example #1 
Het begin van de dag zoeken voor 10 oktober, 2011, 8:00 uur.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
