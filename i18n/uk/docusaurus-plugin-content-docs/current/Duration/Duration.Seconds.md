---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Повертає секундну частину тривалості.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

Повертає секундну частину <code>duration</code>.


## Examples

### Example #1 
Видобути секунди зі значення тривалості.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
