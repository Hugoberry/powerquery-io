---
title: Duration.Minutes
---

# Duration.Minutes


Menghasilkan bagian menit dari durasi.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Menghasilkan bagian menit dari `duration`.


## Examples

### Example #1
Ekstrak menit dari nilai durasi.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
