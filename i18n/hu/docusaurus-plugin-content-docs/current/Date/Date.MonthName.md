---
title: Date.MonthName
---

# Date.MonthName


## Description

A hónap neve összetevőt adja vissza.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

A megadott <code>date</code> hónap összetevőjének nevét adja vissza. Egy nem kötelező <code>culture</code> is megadható (például „en-US”).


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
