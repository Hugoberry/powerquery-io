---
title: Duration.Minutes
---

# Duration.Minutes


Atgriež ilguma minūšu daļu.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Atgriež `duration` minūšu daļu.


## Examples

### Example #1
Izvelk minūtes no ilguma vērtības.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
