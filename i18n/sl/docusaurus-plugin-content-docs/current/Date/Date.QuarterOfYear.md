---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Vrne število, ki kaže, v katerem četrtletju je datum.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Vrne število od 1 do 4, ki kaže, v katerem četrtletju je datum <code>dateTime</code>. <code>dateTime</code> je lahko vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>.


## Examples

### Example #1 
Poiščite, v katerem četrtletju je datum #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
