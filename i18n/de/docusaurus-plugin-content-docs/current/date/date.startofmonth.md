---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Gibt den Beginn des Monats zurück.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Gibt den Beginn des Monats, der <code>dateTime</code> enthält, zurück.    <code>dateTime</code> muss ein <code>date</code>- oder <code>datetime</code>-Wert sein.


## Examples

### Example #1 
Suchen Sie dem Beginn des Monats für den 10. Oktober 2011, 8:10:32 Uhr.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
