---
title: Date.MonthName
---

# Date.MonthName


A hónap neve összetevőt adja vissza.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

A megadott `date` hónap összetevőjének nevét adja vissza. Egy nem kötelező `culture` is megadható (például „en-US”).


## Examples

### Example #1
A hónap nevének lekérése.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
