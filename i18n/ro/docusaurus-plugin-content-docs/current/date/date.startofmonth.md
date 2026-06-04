---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Returnează începutul lunii.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Returnează începutul lunii care conține `dateTime`. `dateTime` trebuie să fie o valoare `date` sau `datetime`.


## Examples

### Example #1
Găsiți începutul lunii pentru 10 octombrie 2011, 8:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
