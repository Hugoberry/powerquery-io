---
title: Date.Month
---

# Date.Month


## Description

Returnează componenta month.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Returnează componenta month a valorii <code>datetime</code> specificate, <code>dateTime</code>.


## Examples

### Example #1 
Găsiţi luna din #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
