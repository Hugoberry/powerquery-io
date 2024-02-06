---
title: Duration.Minutes
---

# Duration.Minutes


Devuelve la parte de minutos de una duración.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Devuelve la parte de minutos de <code>duration</code>.


## Examples

### Example #1 
Extraiga los minutos de un valor de duración.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
