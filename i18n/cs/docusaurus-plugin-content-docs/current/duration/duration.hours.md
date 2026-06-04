---
title: Duration.Hours
---

# Duration.Hours


Vrátí hodinovou část doby trvání.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Vrátí hodinovou část z `duration`.


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
