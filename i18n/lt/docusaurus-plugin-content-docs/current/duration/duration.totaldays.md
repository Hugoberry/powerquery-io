---
title: Duration.TotalDays
---

# Duration.TotalDays


Pateikiamas bendras šios trukmės dienų skaičius.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

Pateikia bendrą dienų, segmentuotų pagal `duration`, skaičių.


## Examples

### Example #1
Raskite bendrą dienų skaičių, segmentuotą pagal trukmės reikšmę.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
