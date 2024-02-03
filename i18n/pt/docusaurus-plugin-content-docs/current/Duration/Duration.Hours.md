---
title: Duration.Hours
---

# Duration.Hours


## Description

Returns the hours portion of a duration.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Returns the hours portion of <code>duration</code>.


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
