---
title: Duration.Seconds
---

# Duration.Seconds


Vraća deo trajanja u sekundama.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Vraća deo trajanja `duration` u sekundama.


## Examples

### Example #1
Izdvojite sekunde iz vrednosti trajanja.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
