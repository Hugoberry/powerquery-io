---
title: Duration.Seconds
---

# Duration.Seconds


Restituisce la parte dei secondi di una durata.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Restituisce la parte dei secondi di <code>duration</code>.


## Examples

### Example #1 
Estrarre i secondi da un valore di durata.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
