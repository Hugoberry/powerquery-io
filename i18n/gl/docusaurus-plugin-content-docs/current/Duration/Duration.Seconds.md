---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Devolve a parte dos segundos dunha duración.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

Devolve a parte dos segundos de <code>duration</code>.


## Examples

### Example #1 
Extrae os segundos dun valor de duración.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
