---
title: Duration.Hours
---

# Duration.Hours


## Description

Palauttaa keston tuntiosan.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Palauttaa kohteen <code>duration</code> tuntiosan.


## Examples

### Example #1 
Poimi tunnit kestoarvosta.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
