---
title: Duration.Days
---

# Duration.Days


## Description

Повертає денну частину тривалості.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Повертає денну частину <code>duration</code>.


## Examples

### Example #1 
Видобудьте кількість днів між двома датами.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
