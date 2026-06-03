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

Returnerer starten af året, der indeholder `dateTime`. `dateTime` skal være en værdi af typen `date`, `datetime` eller `datetimezone`.


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
