---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Mengembalikan jumlah saat untuk jangkauan tempoh ini.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Mengembalikan jumlah saat yang dirangkumi oleh `duration`.


## Examples

### Example #1
Cari jumlah saat yang dirangkumi oleh nilai tempoh.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
