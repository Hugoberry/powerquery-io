---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


## Description

Atgriež kopējo minūšu skaitu šajos intervālos.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Details

Atgriež kopējo minūšu skaitu, kas ietilpst <code>duration</code>.


## Examples

### Example #1 
Atrast kopējo minūšu skaitu, kas ietilpst ilguma vērtībā.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
