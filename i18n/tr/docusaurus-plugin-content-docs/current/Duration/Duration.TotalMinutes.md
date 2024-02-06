---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Bu sürenin kapsadığı toplam dakikayı döndürür.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

<code>duration</code> değerine yayılan toplam dakikayı döndürür.


## Examples

### Example #1 
Bir süre değerine yayılan toplam dakikayı bulun.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
