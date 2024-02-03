---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Vrne število od 1 do 366, ki predstavlja dan v letu.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

Vrne število, ki predstavlja dan letu v podani vrednosti <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Dan v letu za 1. marec 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
