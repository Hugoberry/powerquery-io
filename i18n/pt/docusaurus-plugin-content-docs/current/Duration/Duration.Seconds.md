---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Returns the seconds portion of a duration.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

Returns the seconds portion of <code>duration</code>.


## Examples

### Example #1 
Extract the seconds from a duration value.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
