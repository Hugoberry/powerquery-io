---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Ұзақтықтың секундтар бөлігін қайтарады.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

<code>duration</code> секундтар бөлігін қайтарады.


## Examples

### Example #1 
Ұзақтық мәнінен секундтарды шығарып алу.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
