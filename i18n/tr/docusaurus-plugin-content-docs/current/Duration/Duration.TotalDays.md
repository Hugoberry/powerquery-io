---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Bu sürenin kapsadığı toplam günü döndürür.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

<code>duration</code> değerine yayılan toplam gün sayısını döndürür.


## Examples

### Example #1 
Bir süre değerine yayılan toplam gün sayısını bulun.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
