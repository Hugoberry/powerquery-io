---
title: Date.Month
---

# Date.Month


Devolve o componente de mês.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Devolve o componente de mês do valor <code>datetime</code> fornecido, <code>dateTime</code>.


## Examples

### Example #1 
Encontrar o mês em #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
