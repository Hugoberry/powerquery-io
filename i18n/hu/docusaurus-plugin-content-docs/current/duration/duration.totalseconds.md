---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Az ezen időtartam által felölelt másodpercek számát adja vissza.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

A(z) `duration` által felölelt másodpercek teljes számát adja vissza.


## Examples

### Example #1
Az időtartamérték által felölelt másodpercek teljes számát keresi meg.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
