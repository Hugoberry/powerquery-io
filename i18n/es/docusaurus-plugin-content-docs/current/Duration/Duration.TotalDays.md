---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Devuelve el total de días que abarca esta duración.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

Devuelve el total de días distribuidos por <code>duration</code>.


## Examples

### Example #1 
Busque el total de días distribuidos por un valor de duración.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
