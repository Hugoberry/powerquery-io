---
title: Duration.Hours
---

# Duration.Hours


Retourneert het urengedeelte van een duur.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Retourneert het urengedeelte van <code>duration</code>.


## Examples

### Example #1 
Extraheer de uren uit een duurwaarde.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
