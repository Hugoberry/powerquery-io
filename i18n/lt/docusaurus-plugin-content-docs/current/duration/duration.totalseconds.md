---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Pateikiamas bendras šios trukmės sekundžių skaičius.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Pateikia bendrą sekundžių, kurias segmentavo `duration`, skaičių.


## Examples

### Example #1
Raskite bendrą sekundžių, kurias apima trukmės reikšmė, skaičių.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
