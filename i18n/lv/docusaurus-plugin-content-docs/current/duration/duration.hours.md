---
title: Duration.Hours
---

# Duration.Hours


Atgriež ilguma stundu daļu.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Atgriež `duration` stundu daļu.


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
