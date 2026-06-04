---
title: Date.Month
---

# Date.Month


A hónap összetevőt adja vissza.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

A megadott `dateTime` `datetime` érték hónap összetevőjét adja vissza.


## Examples

### Example #1
A hónap megállapítása a #datetime(2011, 12, 31, 9, 15, 36) értékből
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
