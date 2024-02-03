---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Retorna o total de dias desta duração.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

Retorna o total de dias estendidos por <code>duration</code>.


## Examples

### Example #1 
Localize o total de dias estendidos por um valor de duração.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
