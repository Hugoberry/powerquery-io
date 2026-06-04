---
title: Duration.Seconds
---

# Duration.Seconds


Menghasilkan bagian detik dari durasi.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Menghasilkan bagian detik dari `duration`.


## Examples

### Example #1
Ekstrak detik dari nilai durasi.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
