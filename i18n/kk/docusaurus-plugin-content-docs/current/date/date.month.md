---
title: Date.Month
---

# Date.Month


Ай құрамдасын қайтарады.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Көрсетілген `datetime` мәнінің ай құрамдасын қайтарады, `dateTime`.


## Examples

### Example #1
#datetime(2011, 12, 31, 9, 15, 36) ішіндегі айды табу.
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
