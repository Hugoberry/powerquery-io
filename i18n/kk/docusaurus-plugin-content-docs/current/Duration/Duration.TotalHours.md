---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Осы ұзақтықтың жалпы сағаттар санын қайтарады.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

<code>duration</code> мәніне созылған жалпы сағаттарды қайтарады.


## Examples

### Example #1 
Ұзақтық мәніне созылған жалпы сағаттарды табу.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
