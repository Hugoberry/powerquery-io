---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Vrátí číslo od 1 do 366 představující den v roce.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

Vrací číslo představující den v roce v předané hodnotě <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Den v roce pro 1. březen 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
