---
title: Duration.Hours
---

# Duration.Hours


## Description

Retorna a parte de horas de uma duração.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Retorna a parte de horas do <code>duration</code>.


## Examples

### Example #1 
Extraia as horas de um valor de duração.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
