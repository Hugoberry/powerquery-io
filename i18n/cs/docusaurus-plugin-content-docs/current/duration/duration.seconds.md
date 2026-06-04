---
title: Duration.Seconds
---

# Duration.Seconds


Vrátí sekundovou část doby trvání.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Vrátí sekundovou část z `duration`.


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
