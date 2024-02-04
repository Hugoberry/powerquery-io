---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


## Description

Devolve o total de segundos abrangido por esta duração.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Details

Devolve o total de segundos abrangidos por <code>duration</code>.


## Examples

### Example #1 
Encontre o total de segundos abrangidos por um valor de duração.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
