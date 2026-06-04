---
title: Duration.Seconds
---

# Duration.Seconds


Palauttaa keston sekuntiosan.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Palauttaa kohteen `duration` sekuntiosan.


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
