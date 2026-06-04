---
title: Duration.Hours
---

# Duration.Hours


Vrne del ur za trajanje.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Vrne del ur za `duration`.


## Examples

### Example #1
Ekstrahirajte ure iz vrednosti trajanja.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
