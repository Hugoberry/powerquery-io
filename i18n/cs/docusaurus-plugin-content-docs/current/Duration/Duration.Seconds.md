---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Vrátí sekundovou část doby trvání.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

Vrátí sekundovou část z <code>duration</code>.


## Examples

### Example #1 
Extrahovat sekundy z hodnoty doby trvání.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
