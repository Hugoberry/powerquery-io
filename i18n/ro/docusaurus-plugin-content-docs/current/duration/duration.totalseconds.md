---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Returnează numărul total de secunde cuprinse în această durată.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Returnează numărul total de secunde cuprinse în `duration`.


## Examples

### Example #1
Găsiți numărul total de secunde cuprinse într-o valoare pentru durată.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
