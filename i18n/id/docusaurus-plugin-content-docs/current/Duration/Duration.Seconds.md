---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Menghasilkan bagian detik dari durasi.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

Menghasilkan bagian detik dari <code>duration</code>.


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
