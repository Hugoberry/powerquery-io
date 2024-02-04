---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Devolve a parte dos segundos de uma duração.


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
Extrair os segundos de um valor de duração.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
