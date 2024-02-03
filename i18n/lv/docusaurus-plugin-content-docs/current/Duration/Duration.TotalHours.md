---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Atgriež kopējo stundu skaitu šajos intervālos.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Atgriež kopējo stundu skaitu, kas ietilpst <code>duration</code>.


## Examples

### Example #1 
Atrast kopējo stundu skaitu, kas ietilpst ilguma vērtībā.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
