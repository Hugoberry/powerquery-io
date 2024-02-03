---
title: Duration.Hours
---

# Duration.Hours


## Description

Restituisce la parte delle ore di una durata.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Restituisce la parte delle ore di <code>duration</code>.


## Examples

### Example #1 
Estrarre le ore da un valore di durata.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
