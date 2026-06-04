---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Vrne vse sekunde obsega trajanja.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Vrne skupno št. sekund, ki jih vključuje `duration`.


## Examples

### Example #1
Poiščite skupno št. sekund, ki jih vključuje vrednost trajanja.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
