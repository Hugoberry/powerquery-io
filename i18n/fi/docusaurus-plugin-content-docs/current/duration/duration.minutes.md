---
title: Duration.Minutes
---

# Duration.Minutes


Palauttaa keston minuuttiosan.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Palauttaa kohteen `duration` minuuttiosan.


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
