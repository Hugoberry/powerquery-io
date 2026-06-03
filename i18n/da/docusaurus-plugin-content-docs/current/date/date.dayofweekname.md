---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Returnerer navnet på ugedagen.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Returnerer ugedagens navn for den angivne `date`. Der kan også angives en valgfri `culture` (f. eks. "en-US").


## Examples

### Example #1
Hent navnet på ugedagen.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
