---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


## Description

Повертає загальну кількість хвилин, які охоплює ця тривалість.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Details

Повертає загальну кількість хвилин, які охоплює <code>duration</code>.


## Examples

### Example #1 
Знайти загальну кількість хвилин, які охоплює значення тривалості.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
