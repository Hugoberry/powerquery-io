---
title: Time.Second
---

# Time.Second


## Description

A másodperc összetevőt adja vissza.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

A megadott <code>time</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú <code>dateTime</code> érték másodperc összetevőjét adja vissza.


## Examples

### Example #1 
A dátum/idő értékben szereplő másodpercérték megállapítása.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
