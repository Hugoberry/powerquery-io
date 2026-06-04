---
title: Duration.Minutes
---

# Duration.Minutes


Vraća deo trajanja u minutima.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Vraća deo trajanja `duration` u minutima.


## Examples

### Example #1
Izdvojite minute iz vrednosti trajanja.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
