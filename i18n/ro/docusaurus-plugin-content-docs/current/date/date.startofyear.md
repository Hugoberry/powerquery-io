---
title: Date.StartOfYear
---

# Date.StartOfYear


Returnează începutul anului.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Returnează începutul anului care conține `dateTime`. `dateTime` trebuie să fie o valoare `date`, `datetime` sau `datetimezone`.


## Examples

### Example #1
Găsiți începutul anului pentru 10 octombrie 2011, 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
