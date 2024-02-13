---
title: Date.StartOfYear
---

# Date.StartOfYear


Returnerar början på året.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Returnerar början på året som innehåller <code>dateTime</code>.      <code>dateTime</code> måste vara ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde.


## Examples

### Example #1 
Hitta årets början för den 10 oktober 2011 08:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
