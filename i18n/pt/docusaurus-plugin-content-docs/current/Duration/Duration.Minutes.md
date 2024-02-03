---
title: Duration.Minutes
---

# Duration.Minutes


## Description

Returns the minutes portion of a duration.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

Returns the minutes portion of <code>duration</code>.


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
