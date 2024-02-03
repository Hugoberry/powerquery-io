---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Returnează numărul total de ore pe care le cuprinde această durată.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Returnează numărul total de ore cuprinse în <code>duration</code>.


## Examples

### Example #1 
Găsiți numărul total de ore cuprinse într-o valoare pentru durată.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
