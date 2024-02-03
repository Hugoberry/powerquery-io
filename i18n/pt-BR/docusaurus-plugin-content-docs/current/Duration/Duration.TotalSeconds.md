---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


## Description

Retorna o total de segundos desta duração.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Details

Retorna o total de segundos estendidos por <code>duration</code>.


## Examples

### Example #1 
Localize o total de segundos estendidos por um valor de duração.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
