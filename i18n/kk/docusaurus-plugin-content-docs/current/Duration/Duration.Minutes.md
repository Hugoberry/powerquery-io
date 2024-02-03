---
title: Duration.Minutes
---

# Duration.Minutes


## Description

Ұзақтықтың минуттар бөлігін қайтарады.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

<code>duration</code> минуттар бөлігін қайтарады.


## Examples

### Example #1 
Ұзақтық мәнінен минуттарды шығарып алу.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
