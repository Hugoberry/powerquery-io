---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Retorna a parte de segundos de uma duração.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

Retorna a parte de segundos de <code>duration</code>.


## Examples

### Example #1 
Extraia os segundos de um valor de duração.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
