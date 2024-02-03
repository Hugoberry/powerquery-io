---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Vrátí číslo značící, do kterého čtvrtletí roku datum spadá.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Vrátí číslo v rozsahu 1 až 4 značící, do kterého čtvrtletí roku spadá datum <code>dateTime</code>. <code>dateTime</code> může být hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>.


## Examples

### Example #1 
Zjistí, do kterého čtvrtletí roku spadá datum #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
