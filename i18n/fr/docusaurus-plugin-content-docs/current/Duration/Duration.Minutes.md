---
title: Duration.Minutes
---

# Duration.Minutes


Retourne la partie minutes d’une durée.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Retourne la partie minutes de <code>duration</code>.


## Examples

### Example #1 
Extrayez les minutes d’une valeur de durée.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
