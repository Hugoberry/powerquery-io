---
title: Date.Year
---

# Date.Year


Devolve o componente de ano.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Devolve o componente de ano do valor <code>datetime</code> fornecido, <code>dateTime</code>.


## Examples

### Example #1 
Encontrar o ano em #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
