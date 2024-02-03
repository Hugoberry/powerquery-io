---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Vraća broj od 1 do 366 koji predstavlja dan u godini.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

Vraća broj koji predstavlja dan u godini u navedenoj vrednosti <code>date</code>, <code>datetime</code> ili <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Dan u godini za 1. mart 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
