---
title: Date.Month
---

# Date.Month


## Description

Devolve o compoñente de mes.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Devolve o compoñente de mes do valor <code>datetime</code> fornecido, <code>dateTime</code>.


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
