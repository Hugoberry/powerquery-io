---
title: Duration.Hours
---

# Duration.Hours


## Description

Menghasilkan bagian jam dari durasi.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Menghasilkan bagian jam dari <code>duration</code>.


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
