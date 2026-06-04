---
title: Duration.Seconds
---

# Duration.Seconds


Vrne del sekund za trajanje.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Vrne del sekund za `duration`.


## Examples

### Example #1
Ekstrahirajte sekunde iz vrednosti trajanja.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
