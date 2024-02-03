---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


## Description

Осы ұзақтықтың жалпы минуттар санын қайтарады.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Details

<code>duration</code> мәніне созылған жалпы минуттарды қайтарады.


## Examples

### Example #1 
Ұзақтық мәніне созылған жалпы минуттарды табу.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
