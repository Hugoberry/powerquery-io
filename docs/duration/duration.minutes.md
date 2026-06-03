---
title: Duration.Minutes
---

# Duration.Minutes


Returns the minutes portion of a duration.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Returns the minutes portion of `duration`.


## Examples

### Example #1
Extract the minutes from a duration value.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
