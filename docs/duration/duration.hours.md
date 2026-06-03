---
title: Duration.Hours
---

# Duration.Hours


Returns the hours portion of a duration.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Returns the hours portion of `duration`.


## Examples

### Example #1
Extract the hours from a duration value.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
