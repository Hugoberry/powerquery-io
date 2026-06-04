---
title: Duration.TotalHours
---

# Duration.TotalHours


Menghasilkan total jam yang dijangkau durasi ini.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

Menghasilkan total jam yang dijangkau dengan `duration`.


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
