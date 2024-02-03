---
title: Duration.Hours
---

# Duration.Hours


## Description

Vrátí hodinovou část doby trvání.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Vrátí hodinovou část z <code>duration</code>.


## Examples

### Example #1 
Extrahovat hodiny z hodnoty doby trvání.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
