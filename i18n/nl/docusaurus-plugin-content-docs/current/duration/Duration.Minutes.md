---
title: Duration.Minutes
---

# Duration.Minutes


Retourneert het minutengedeelte van een duur.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Retourneert het minutengedeelte van <code>duration</code>.


## Examples

### Example #1 
Extraheer de minuten uit een duurwaarde.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
