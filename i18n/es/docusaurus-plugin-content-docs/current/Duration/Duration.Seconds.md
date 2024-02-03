---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Devuelve la parte de segundos de una duración.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

Devuelve la parte de segundos de <code>duration</code>.


## Examples

### Example #1 
Extraiga los segundos de un valor de duración.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
