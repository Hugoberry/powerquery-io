---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Atgriež ilguma sekunžu daļu.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

Atgriež <code>duration</code> sekunžu daļu.


## Examples

### Example #1 
Izvelk sekundes no ilguma vērtības.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
