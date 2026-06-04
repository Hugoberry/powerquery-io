---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Atgriež kopējo sekunžu skaitu šajos intervālos.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Atgriež kopējo sekunžu skaitu, kas ietilpst `duration`.


## Examples

### Example #1
Atrast kopējo sekunžu skaitu, kas ietilpst ilguma vērtībā.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
