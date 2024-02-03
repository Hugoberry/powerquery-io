---
title: Date.Month
---

# Date.Month


## Description

Palauttaa kuukausiosan.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Palauttaa annetun <code>datetime</code>-arvon <code>dateTime</code> kuukausiosan.


## Examples

### Example #1 
Selvitä kuukausi kohteessa #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
