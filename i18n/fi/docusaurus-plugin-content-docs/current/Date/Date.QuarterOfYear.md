---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Palauttaa luvun, joka ilmaisee, millä vuoden vuosineljänneksellä päivämäärä on.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Palauttaa luvun 1–4, joka ilmaisee, minä vuoden vuosineljänneksenä päivämäärä <code>dateTime</code> on. <code>dateTime</code> voi olla <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo.


## Examples

### Example #1 
Selvitä, millä vuoden vuosineljänneksellä päivämäärä #date(2011, 12, 31) on.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
