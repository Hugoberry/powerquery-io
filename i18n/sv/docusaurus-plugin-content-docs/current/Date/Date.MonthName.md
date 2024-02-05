---
title: Date.MonthName
---

# Date.MonthName


## Description

Returnerar namnet på månadskomponenten.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Returnerar namnet på månadskomponenten för den angivna <code>date</code>. En valfri <code>culture</code> kan även anges (till exempel "en-US").


## Examples

### Example #1 
Hämta namnet på månaden.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
