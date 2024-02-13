---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Restituisce i secondi totali della durata.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Restituisce i secondi totali con spanning per <code>duration</code>.


## Examples

### Example #1 
Trovare i secondi totali con spanning per un valore di durata.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
