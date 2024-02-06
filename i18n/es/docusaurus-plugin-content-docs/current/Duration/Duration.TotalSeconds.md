---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Devuelve el total de segundos que abarca esta duración.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Devuelve el total de segundos distribuidos por <code>duration</code>.


## Examples

### Example #1 
Busque el total de segundos distribuidos por un valor de duración.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
