---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Pateikiamas bendras šios trukmės dienų skaičius.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

Pateikia bendrą dienų, segmentuotų pagal <code>duration</code>, skaičių.


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
