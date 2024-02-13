---
title: Duration.Minutes
---

# Duration.Minutes


Retorna a parte de minutos de uma duração.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Retorna a parte de minutos de <code>duration</code>.


## Examples

### Example #1 
Extraia os minutos de um valor de duração.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
