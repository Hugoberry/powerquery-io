---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Devolve o total de minutos abrangido por esta duração.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Devolve o total de minutos abrangidos por <code>duration</code>.


## Examples

### Example #1 
Encontre o total de minutos abrangidos por um valor de duração.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
