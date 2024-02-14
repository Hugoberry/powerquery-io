---
title: Date.MonthName
---

# Date.MonthName


Returnerer navnet på månedskomponenten.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Returnerer navnet på månedskomponenten for den angivne <code>date</code>. Der kan også angives en valgfri <code>culture</code> (f. eks. "en-US").


## Examples

### Example #1 
Hent navnet på måneden.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
