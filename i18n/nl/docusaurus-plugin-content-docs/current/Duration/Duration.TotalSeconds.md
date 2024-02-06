---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Retourneert het totale aantal seconden waaruit deze duur bestaat.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Retourneert het totale aantal seconden dat door <code>duration</code> is overspannen.


## Examples

### Example #1 
Zoek het totale aantal seconden dat wordt beslaan door een duurwaarde.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
