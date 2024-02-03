---
title: Date.Year
---

# Date.Year


## Description

Retorna el component any.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Retorna el component any del valor <code>datetime</code> proporcionat, <code>dateTime</code>.


## Examples

### Example #1 
Troba l&#39;any en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
