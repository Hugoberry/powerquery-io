---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


## Description

Vrne vse minute obsega trajanja.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Details

Vrne skupno št. minut, ki jih vključuje <code>duration</code>.


## Examples

### Example #1 
Poiščite skupno št. minut, ki jih vključuje vrednost trajanja.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
