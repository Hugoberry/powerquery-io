---
title: Duration.Seconds
---

# Duration.Seconds


Retourneert het secondengedeelte van een duur.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Retourneert het secondengedeelte van `duration`.


## Examples

### Example #1
Extraheer de seconden uit een duurwaarde.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
