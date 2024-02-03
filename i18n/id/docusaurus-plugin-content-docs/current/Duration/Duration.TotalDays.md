---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Menghasilkan total hari yang dijangkau durasi ini.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

Menghasilkan total hari yang dijangkau dengan <code>duration</code>.


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
