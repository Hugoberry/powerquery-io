---
title: Duration.Minutes
---

# Duration.Minutes


## Description

Sürenin gün dakika kısmını döndürür.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

<code>duration</code> için dakika kısmını döndürür.


## Examples

### Example #1 
Süre değerinden dakikaları ayıklayın.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
