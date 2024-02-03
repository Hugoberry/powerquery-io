---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Palauttaa keston sekuntiosan.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

Palauttaa kohteen <code>duration</code> sekuntiosan.


## Examples

### Example #1 
Poimi sekunnit kestoarvosta.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
