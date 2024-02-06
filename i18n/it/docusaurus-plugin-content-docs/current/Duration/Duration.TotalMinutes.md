---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Restituisce i minuti totali della durata.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Restituisce i minuti totali con spanning per <code>duration</code>.


## Examples

### Example #1 
Trovare i minuti totali con spanning per un valore di durata.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
