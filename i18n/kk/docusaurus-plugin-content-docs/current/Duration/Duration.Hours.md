---
title: Duration.Hours
---

# Duration.Hours


## Description

Ұзақтықтың сағаттар бөлігін қайтарады.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

<code>duration</code> сағаттар бөлігін қайтарады.


## Examples

### Example #1 
Ұзақтық мәнінен сағаттарды шығарып алу.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
