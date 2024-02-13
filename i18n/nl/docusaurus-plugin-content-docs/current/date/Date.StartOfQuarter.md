---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Retourneert het begin van het kwartaal.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Retourneert het begin van het kwartaal dat <code>dateTime</code>bevat. <code>dateTime</code> moet een <code>datum</code>-, <code>datum/tijd</code>- of <code>datum/tijdzone</code>-waarde zijn.


## Examples

### Example #1 
Het begin van het kwartaal zoeken voor 10 oktober, 2011, 8:00 uur.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
