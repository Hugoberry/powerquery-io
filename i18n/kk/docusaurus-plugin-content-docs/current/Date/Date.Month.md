---
title: Date.Month
---

# Date.Month


## Description

Ай құрамдасын қайтарады.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Көрсетілген <code>datetime</code> мәнінің ай құрамдасын қайтарады, <code>dateTime</code>.


## Examples

### Example #1 
#datetime(2011, 12, 31, 9, 15, 36) ішіндегі айды табу.
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
