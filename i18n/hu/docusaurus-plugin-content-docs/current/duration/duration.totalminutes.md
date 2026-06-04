---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Az ezen időtartam által felölelt percek számát adja vissza.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

A(z) `duration` által felölelt percek teljes számát adja vissza.


## Examples

### Example #1
Az időtartamérték által felölelt percek teljes számát keresi meg.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
