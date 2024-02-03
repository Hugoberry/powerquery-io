---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Palauttaa luvun 1–6, joka ilmaisee, mille kuukauden viikolle tämä päivämäärä osuu.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Palauttaa luvun 1–6, joka ilmaisee, mille kuukauden viikolle päivämäärä <code>dateTime</code> osuu. <ul>        <li><code>dateTime</code>: <code>datetime</code>-arvo, jolle kuukauden viikko määritetään.</li>      </ul>


## Examples

### Example #1 
Määritä, millä viikolla maaliskuun 15. päivä on vuonna 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
