---
title: Duration.Seconds
---

# Duration.Seconds


Retourne la partie secondes d’une durée.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Retourne la partie secondes de <code>duration</code>.


## Examples

### Example #1 
Extrayez les secondes d’une valeur de durée.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
