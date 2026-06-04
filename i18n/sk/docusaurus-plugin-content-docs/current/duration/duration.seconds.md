---
title: Duration.Seconds
---

# Duration.Seconds


Vráti časť trvania v sekundách.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Vráti časť trvania v `duration`.


## Examples

### Example #1
Extrahuje sekundy z hodnoty trvania.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
