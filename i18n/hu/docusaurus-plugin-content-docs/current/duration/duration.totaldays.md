---
title: Duration.TotalDays
---

# Duration.TotalDays


Az ezen időtartam által felölelt napok számát adja vissza.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

A(z) `duration` által felölelt napok teljes számát adja vissza.


## Examples

### Example #1
Az időtartamérték által felölelt napok teljes számát keresi meg.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
