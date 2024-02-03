---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


## Description

Bu sürenin kapsadığı toplam saniyeyi döndürür.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Details

<code>duration</code> değerine yayılan toplam saniyeyi döndürür.


## Examples

### Example #1 
Bir süre değerine yayılan toplam saniyeyi bulun.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
