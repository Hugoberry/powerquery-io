---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Returnează numărul total de minute cuprinse în această durată.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Returnează numărul total de minute cuprinse în `duration`.


## Examples

### Example #1
Găsiți numărul total de minute cuprinse într-o valoare pentru durată.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
