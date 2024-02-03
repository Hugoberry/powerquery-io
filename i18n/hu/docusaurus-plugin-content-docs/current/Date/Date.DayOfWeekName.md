---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

A hét napjának nevét adja vissza.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

A megadott <code>date</code> napjának nevét adja vissza. Egy nem kötelező <code>culture</code> is megadható (például „en-US”).


## Examples

### Example #1 
A hét napja nevének lekérése.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
