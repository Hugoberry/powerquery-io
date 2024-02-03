---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Vrne vse ure obsega trajanja.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Vrne skupno št. ur, ki jih vključuje <code>duration</code>.


## Examples

### Example #1 
Poiščite skupno št. ur, ki jih vključuje vrednost trajanja.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
