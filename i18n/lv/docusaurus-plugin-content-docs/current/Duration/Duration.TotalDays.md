---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Atgriež kopējo dienu skaitu šajos intervālos.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

Atgriež kopējo dienu skaitu, kas ietilpst <code>duration</code>.


## Examples

### Example #1 
Atrast kopējo dienu skaitu, kas ietilpst ilguma vērtībā.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
