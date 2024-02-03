---
title: Duration.Hours
---

# Duration.Hours


## Description

Atgriež ilguma stundu daļu.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Atgriež <code>duration</code> stundu daļu.


## Examples

### Example #1 
Izvelk stundas no ilguma vērtības.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
