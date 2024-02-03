---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Menghasilkan total jam yang dijangkau durasi ini.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Menghasilkan total jam yang dijangkau dengan <code>duration</code>.


## Examples

### Example #1 
Temukan total jam yang dijangkau dengan nilai durasi.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
