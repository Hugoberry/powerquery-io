---
title: Date.Month
---

# Date.Month


## Description

Retorna el component mes.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Retorna el component mes del valor <code>datetime</code> proporcionat, <code>dateTime</code>.


## Examples

### Example #1 
Troba el mes en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
