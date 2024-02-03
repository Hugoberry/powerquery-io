---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Vraća broj koji pokazuje u kom se kvartalu u godini datum nalazi.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Vraća broj od 1 do 4 koji pokazuje u kom se kvartalu u godini datum <code>dateTime</code> nalazi. <code>dateTime</code> može da bude vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code>.


## Examples

### Example #1 
Pronalaženje kvartala u godini u kome se nalazi datum #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
