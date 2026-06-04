---
title: Duration.TotalHours
---

# Duration.TotalHours


Pateikiamas bendras šios trukmės valandų skaičius.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

Pateikia bendrą valandų, segmentuotų pagal `duration`, skaičių.


## Examples

### Example #1
Raskite bendrą valandų, kurias apima trukmės reikšmė, skaičių.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
