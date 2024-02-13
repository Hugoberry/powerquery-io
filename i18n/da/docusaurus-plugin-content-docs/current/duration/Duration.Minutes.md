---
title: Duration.Minutes
---

# Duration.Minutes


Returnerer minutdelen af en varighed.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Returnerer minutdelen af <code>duration</code>.


## Examples

### Example #1 
Udtræk minutterne fra en varighedsværdi.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
