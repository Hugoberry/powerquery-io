---
title: Duration.Hours
---

# Duration.Hours


## Description

Devolve a parte das horas de uma duração.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Devolve a parte das horas de <code>duration</code>.


## Examples

### Example #1 
Extrair as horas de um valor de duração.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
