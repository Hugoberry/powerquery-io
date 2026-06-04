---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Menghasilkan total menit yang dijangkau durasi ini.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Menghasilkan total menit yang dijangkau dengan `duration`.


## Examples

### Example #1
Temukan total menit yang dijangkau dengan nilai durasi.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
