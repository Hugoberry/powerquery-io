---
title: Duration.Hours
---

# Duration.Hours


## Description

Retorna la part d&#39;hores d&#39;una duració.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Retorna la part d'hores de <code>duration</code>.


## Examples

### Example #1 
Extraieu les hores d&#39;un valor de duració.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
