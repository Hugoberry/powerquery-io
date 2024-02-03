---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


## Description

Retorna o total de minutos desta duração.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Details

Retorna o total de minutos estendidos por <code>duration</code>.


## Examples

### Example #1 
Localize o total de minutos estendidos por um valor de duração.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
