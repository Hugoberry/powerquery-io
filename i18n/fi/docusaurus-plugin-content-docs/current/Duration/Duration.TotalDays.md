---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Palauttaa tämän keston kattamat päivät yhteensä.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

Palauttaa kohteen <code>duration</code> kattamat päivät yhteensä.


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
