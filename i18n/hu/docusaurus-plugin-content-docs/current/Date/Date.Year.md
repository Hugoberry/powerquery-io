---
title: Date.Year
---

# Date.Year


## Description

Az év összetevőt adja vissza.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

A megadott <code>dateTime</code> <code>datetime</code> érték év összetevőjét adja vissza.


## Examples

### Example #1 
Az év megállapítása a #datetime(2011, 12, 31, 9, 15, 36) értékből
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
