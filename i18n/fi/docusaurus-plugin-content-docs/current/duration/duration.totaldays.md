---
title: Duration.TotalDays
---

# Duration.TotalDays


Palauttaa tämän keston kattamat päivät yhteensä.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

Palauttaa kohteen `duration` kattamat päivät yhteensä.


## Examples

### Example #1
Selvitä kestoarvon kattamat päivät yhteensä.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
