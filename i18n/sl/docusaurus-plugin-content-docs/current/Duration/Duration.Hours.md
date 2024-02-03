---
title: Duration.Hours
---

# Duration.Hours


## Description

Vrne del ur za trajanje.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Vrne del ur za <code>duration</code>.


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
