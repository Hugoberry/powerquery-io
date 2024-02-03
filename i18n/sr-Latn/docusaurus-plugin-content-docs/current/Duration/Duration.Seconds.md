---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Vraća deo trajanja u sekundama.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

Vraća deo trajanja <code>duration</code> u sekundama.


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
