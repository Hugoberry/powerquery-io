---
title: Duration.Hours
---

# Duration.Hours


## Description

Vraća deo trajanja u časovima.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Vraća deo trajanja <code>duration</code> u časovima.


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
