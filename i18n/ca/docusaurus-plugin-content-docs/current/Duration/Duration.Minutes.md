---
title: Duration.Minutes
---

# Duration.Minutes


## Description

Retorna la part de minuts d&#39;una duració.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

Retorna la part de minuts de <code>duration</code>.


## Examples

### Example #1 
Extraieu els minuts d&#39;un valor de duració.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
