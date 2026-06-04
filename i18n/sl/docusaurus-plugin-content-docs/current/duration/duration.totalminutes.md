---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Vrne vse minute obsega trajanja.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Vrne skupno št. minut, ki jih vključuje `duration`.


## Examples

### Example #1
Poiščite skupno št. minut, ki jih vključuje vrednost trajanja.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
