---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Devolve o total de dias abrangido por esta duração.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

Devolve o total de dias abrangidos por <code>duration</code>.


## Examples

### Example #1 
Encontre o total de dias abrangidos por um valor de duração.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
