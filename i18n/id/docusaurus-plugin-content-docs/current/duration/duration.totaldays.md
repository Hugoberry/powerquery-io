---
title: Duration.TotalDays
---

# Duration.TotalDays


Menghasilkan total hari yang dijangkau durasi ini.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

Menghasilkan total hari yang dijangkau dengan `duration`.


## Examples

### Example #1
Temukan total hari yang dijangkau dengan nilai durasi.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
