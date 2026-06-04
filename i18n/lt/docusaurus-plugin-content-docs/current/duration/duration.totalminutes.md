---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Pateikiamas bendras šios trukmės minučių skaičius.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Pateikia bendrą minučių, kurias segmentavo `duration`, skaičių.


## Examples

### Example #1
Raskite bendrą minučių, kurias apima trukmės reikšmė, skaičių.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
