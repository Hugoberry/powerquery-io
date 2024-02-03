---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


## Description

Retorna el total de segons que abraça aquesta durada.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Details

Retorna el total de segons que abraça <code>duration</code>.


## Examples

### Example #1 
Trobeu el total de segons que abraça un valor de duració.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
