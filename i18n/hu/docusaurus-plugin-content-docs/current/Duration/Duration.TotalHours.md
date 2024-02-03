---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Az ezen időtartam által felölelt órák számát adja vissza.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

A(z) <code>duration</code> által felölelt órák teljes számát adja vissza.


## Examples

### Example #1 
Az időtartamérték által felölelt órák teljes számát keresi meg.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
