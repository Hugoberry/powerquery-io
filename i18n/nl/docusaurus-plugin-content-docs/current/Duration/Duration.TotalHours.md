---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Retourneert het totale aantal uren waaruit deze duur bestaat.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Retourneert het totale aantal uren dat is verdeeld door <code>duration</code>.


## Examples

### Example #1 
Zoek het totale aantal uren dat wordt beslaan door een duurwaarde.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
