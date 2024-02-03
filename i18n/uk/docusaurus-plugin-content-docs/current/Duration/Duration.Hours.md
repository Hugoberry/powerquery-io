---
title: Duration.Hours
---

# Duration.Hours


## Description

Повертає годинну частину тривалості.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Повертає годинну частину <code>duration</code>.


## Examples

### Example #1 
Видобути години зі значення тривалості.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
