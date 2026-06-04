---
title: Duration.TotalDays
---

# Duration.TotalDays


Vrne vse dni obsega trajanja.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

Vrne skupno št. dni, ki jih vključuje `duration`.


## Examples

### Example #1
Poiščite skupno št. dni, ki jih vključuje vrednost trajanja.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
