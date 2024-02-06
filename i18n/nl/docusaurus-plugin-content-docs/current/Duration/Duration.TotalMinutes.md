---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Retourneert het totale aantal minuten waaruit deze duur bestaat.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Retourneert het totale aantal minuten dat door <code>duration</code> is verdeeld.


## Examples

### Example #1 
Zoek het totale aantal minuten dat wordt beslaan door een duurwaarde.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
