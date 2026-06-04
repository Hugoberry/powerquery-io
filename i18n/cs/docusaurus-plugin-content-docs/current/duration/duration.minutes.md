---
title: Duration.Minutes
---

# Duration.Minutes


Vrátí minutovou část doby trvání.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Vrátí minutovou část z `duration`.


## Examples

### Example #1
Extrahovat minuty z hodnoty doby trvání.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
