---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


## Description

Повертає загальну кількість секунд, які охоплює ця тривалість.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Details

Повертає загальну кількість секунд, які охоплює <code>duration</code>.


## Examples

### Example #1 
Знайти загальну кількість секунд, які охоплює значення тривалості.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
