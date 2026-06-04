---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Menghasilkan total detik yang dijangkau durasi ini.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Menghasilkan total detik yang dijangkau dengan `duration`.


## Examples

### Example #1
Temukan total detik yang dijangkau dengan nilai durasi.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
