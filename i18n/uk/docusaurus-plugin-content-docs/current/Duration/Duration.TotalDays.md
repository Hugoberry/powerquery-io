---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Повертає загальну кількість днів, які охоплює ця тривалість.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

Повертає загальну кількість днів, які охоплює <code>duration</code>.


## Examples

### Example #1 
Знайти загальну кількість днів, які охоплює значення тривалості.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
