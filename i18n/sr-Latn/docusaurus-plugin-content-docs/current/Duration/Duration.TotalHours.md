---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Vraća ukupan broj sati koje ovo trajanje obuhvata.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Vraća ukupan broj časova koje obuhvata <code>duration</code>.


## Examples

### Example #1 
Pronađite ukupan broj časova koje obuhvata vrednost trajanja.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
