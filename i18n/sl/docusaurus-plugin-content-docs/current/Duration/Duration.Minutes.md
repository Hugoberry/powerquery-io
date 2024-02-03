---
title: Duration.Minutes
---

# Duration.Minutes


## Description

Vrne del minut za trajanje.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

Vrne del minut za <code>duration</code>.


## Examples

### Example #1 
Ekstrahirajte minute iz vrednosti trajanja.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
