---
title: Duration.Minutes
---

# Duration.Minutes


## Description

Vraća deo trajanja u minutima.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

Vraća deo trajanja <code>duration</code> u minutima.


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
