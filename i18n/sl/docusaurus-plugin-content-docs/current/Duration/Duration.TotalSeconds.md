---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


## Description

Vrne vse sekunde obsega trajanja.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Details

Vrne skupno št. sekund, ki jih vključuje <code>duration</code>.


## Examples

### Example #1 
Poiščite skupno št. sekund, ki jih vključuje vrednost trajanja.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
