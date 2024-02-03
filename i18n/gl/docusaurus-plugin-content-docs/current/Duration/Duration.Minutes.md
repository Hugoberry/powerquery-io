---
title: Duration.Minutes
---

# Duration.Minutes


## Description

Devolve a parte dos minutos dunha duración.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

Devolve a parte dos minutos de <code>duration</code>.


## Examples

### Example #1 
Extrae os minutos dun valor de duración.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
