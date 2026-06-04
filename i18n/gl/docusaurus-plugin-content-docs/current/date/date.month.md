---
title: Date.Month
---

# Date.Month


Devolve o compoñente de mes.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Devolve o compoñente de mes do valor `datetime` fornecido, `dateTime`.


## Examples

### Example #1
Buscar o mes en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
