---
title: Duration.TotalDays
---

# Duration.TotalDays


Returnează numărul total de zile pe care le cuprinde această durată.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

Returnează numărul total de zile cuprinse în `duration`.


## Examples

### Example #1
Găsiți numărul total de zile cuprinse într-o valoare pentru durată.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
