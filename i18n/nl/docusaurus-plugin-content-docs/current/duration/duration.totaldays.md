---
title: Duration.TotalDays
---

# Duration.TotalDays


Retourneert het totale aantal dagen waaruit deze duur bestaat.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

Retourneert het totale aantal dagen dat is beslaan door <code>duration</code>.


## Examples

### Example #1 
Zoek het totale aantal dagen dat wordt beslaan door een duurwaarde.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
