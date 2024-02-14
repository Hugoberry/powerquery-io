---
title: Duration.Minutes
---

# Duration.Minutes


Restituisce la parte dei minuti di una durata.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Restituisce la parte dei minuti di <code>duration</code>.


## Examples

### Example #1 
Estrarre i minuti da un valore di durata.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
