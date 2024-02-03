---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Az év napját jelző, 1 és 366 közötti számot ad vissza.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

A megadott <code>dateTime</code> <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> értékben az év napjának sorszámát jelölő számot adja vissza.


## Examples

### Example #1 
Az év napja 2011. március 1-jén.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
