---
title: Duration.Minutes
---

# Duration.Minutes


## Description

Palauttaa keston minuuttiosan.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

Palauttaa kohteen <code>duration</code> minuuttiosan.


## Examples

### Example #1 
Poimi minuutit kestoarvosta.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
