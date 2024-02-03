---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Vrne vse dni obsega trajanja.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

Vrne skupno št. dni, ki jih vključuje <code>duration</code>.


## Examples

### Example #1 
Poiščite skupno št. dni, ki jih vključuje vrednost trajanja.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
