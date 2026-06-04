---
title: Duration.Hours
---

# Duration.Hours


Menghasilkan bagian jam dari durasi.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Menghasilkan bagian jam dari `duration`.


## Examples

### Example #1
Ekstrak jam dari nilai durasi.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
