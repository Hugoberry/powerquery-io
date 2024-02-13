---
title: Date.StartOfYear
---

# Date.StartOfYear


Returnerer starten af året.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Returnerer starten af året, der indeholder <code>dateTime</code>.    <code>dateTime</code> skal være en værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>.


## Examples

### Example #1 
Find årets start for 10. oktober 2011, klokken 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
