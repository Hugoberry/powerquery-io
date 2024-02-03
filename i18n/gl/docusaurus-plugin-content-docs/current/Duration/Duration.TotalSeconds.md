---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


## Description

Devolve o total de segundos que ocupa esta duración.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Details

Devolve o total de segundos abarcados por <code>duration</code>.


## Examples

### Example #1 
Busca o total de segundos abarcados por un valor de duración.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
