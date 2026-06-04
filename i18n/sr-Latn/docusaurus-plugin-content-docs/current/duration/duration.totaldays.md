---
title: Duration.TotalDays
---

# Duration.TotalDays


Vraća ukupan broj dana koje ovo trajanje obuhvata.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

Vraća ukupan broj dana koje obuhvata `duration`.


## Examples

### Example #1
Pronađite ukupan broj dana koje obuhvata vrednost trajanja.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
