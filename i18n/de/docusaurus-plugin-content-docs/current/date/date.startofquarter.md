---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Gibt den Beginn des Quartals zurück.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Gibt den Beginn des Quartals, der <code>dateTime</code> enthält, zurück.      <code>dateTime</code> muss ein <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert sein.


## Examples

### Example #1 
Suchen Sie den Beginn des Quartals für den 10. Oktober 2011, 8:00 Uhr.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
