---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


## Description

Осы ұзақтықтың жалпы секунд санын қайтарады.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Details

<code>duration</code> мәніне созылған жалпы секундтарды қайтарады.


## Examples

### Example #1 
Ұзақтық мәніне созылған жалпы секундтарды табу.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
