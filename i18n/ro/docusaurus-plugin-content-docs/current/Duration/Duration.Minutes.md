---
title: Duration.Minutes
---

# Duration.Minutes


## Description

Returnează porțiunea de minute dintr-o durată.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

Returnează porțiunea de minute din <code>duration</code>.


## Examples

### Example #1 
Extrageți minutele dintr-o valoare pentru durată.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
