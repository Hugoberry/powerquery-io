---
title: Duration.Hours
---

# Duration.Hours


Returnerer timedelen af en varighed.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Returnerer timedelen af <code>duration</code>.


## Examples

### Example #1 
Udtræk timerne fra en varighedsværdi.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
