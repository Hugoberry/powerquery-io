---
title: Duration.Hours
---

# Duration.Hours


Vraća deo trajanja u časovima.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Vraća deo trajanja `duration` u časovima.


## Examples

### Example #1
Izdvojite časove iz vrednosti trajanja.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
