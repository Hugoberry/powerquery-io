---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Returnează începutul trimestrului.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Returnează începutul trimestrului care conține `dateTime`. `dateTime` trebuie să fie o valoare `date`, `datetime` sau `datetimezone`.


## Examples

### Example #1
Găsiți începutul trimestrului pentru 10 octombrie 2011, 8:00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
