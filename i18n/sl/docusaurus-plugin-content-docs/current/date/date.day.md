---
title: Date.Day
---

# Date.Day


Vrne komponento dneva.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Vrne komponento dneva vrednosti `date`, `datetime` ali `datetimezone`.

-   `dateTime`: vrednost `date`, `datetime` ali `datetimezone`, iz katere se določi komponenta dneva.


## Examples

### Example #1
Pridobite komponento dneva vrednosti `date`, `datetime` ali `datetimezone`, ki predstavlja datum in čas 5/14/2011 05:00:00 PM.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
