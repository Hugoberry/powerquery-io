---
title: Date.Year
---

# Date.Year


Retorna el component any.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Retorna el component any del valor `datetime` proporcionat, `dateTime`.


## Examples

### Example #1
Troba l'any en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
