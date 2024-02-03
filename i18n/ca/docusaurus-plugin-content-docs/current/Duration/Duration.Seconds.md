---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Retorna la part de segons d&#39;una duració.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

Retorna la part de segons de <code>duration</code>.


## Examples

### Example #1 
Extraieu els segons d&#39;un valor de duració.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
