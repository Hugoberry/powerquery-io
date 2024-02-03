---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Returns the day of the week name.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Returns the day of the week name for the provided <code>date</code>. An optional <code>culture</code> may also be provided (for example, "en-US").


## Examples

### Example #1 
Get the day of the week name.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
