---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Vrne del sekund za trajanje.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

Vrne del sekund za <code>duration</code>.


## Examples

### Example #1 
Ekstrahirajte sekunde iz vrednosti trajanja.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
