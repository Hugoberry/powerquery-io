---
title: Date.Year
---

# Date.Year


## Description

Жыл құрамдасын қайтарады.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Көрсетілген <code>datetime</code> мәнінің жыл құрамдасын қайтарады, <code>dateTime</code>.


## Examples

### Example #1 
#datetime(2011, 12, 31, 9, 15, 36) ішіндегі жылды табу.
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
