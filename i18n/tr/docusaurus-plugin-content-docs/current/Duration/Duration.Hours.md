---
title: Duration.Hours
---

# Duration.Hours


## Description

Sürenin saat kısmını döndürür.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

<code>duration</code> için saat kısmını döndürür


## Examples

### Example #1 
Süre değerinden saatleri ayıklayın.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
