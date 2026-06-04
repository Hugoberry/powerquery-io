---
title: Date.Year
---

# Date.Year


Devolve o compoñente de ano.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Devolve o compoñente de ano do valor `datetime` fornecido, `dateTime`.


## Examples

### Example #1
Buscar o ano en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
