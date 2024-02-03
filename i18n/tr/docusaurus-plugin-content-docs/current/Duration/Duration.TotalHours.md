---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Bu sürenin kapsadığı toplam saati döndürür.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

<code>duration</code> değerine yayılan toplam saati döndürür.


## Examples

### Example #1 
Bir süre değerine yayılan toplam saati bulun.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
