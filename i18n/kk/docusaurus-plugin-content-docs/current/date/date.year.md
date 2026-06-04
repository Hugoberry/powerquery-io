---
title: Date.Year
---

# Date.Year


Жыл құрамдасын қайтарады.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Көрсетілген `datetime` мәнінің жыл құрамдасын қайтарады, `dateTime`.


## Examples

### Example #1
#datetime(2011, 12, 31, 9, 15, 36) ішіндегі жылды табу.
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
