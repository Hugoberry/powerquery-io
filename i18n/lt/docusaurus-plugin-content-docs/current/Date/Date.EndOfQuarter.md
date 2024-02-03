---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Pateikia ketvirčio pabaigą.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Pateikiama ketvirčio, kuriame yra <code>dateTime</code>, pabaiga. Išsaugoma laiko juostos informacija.      <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė, pagal kurią apskaičiuojama ketvirčio pabaiga.</li>      </ul>


## Examples

### Example #1 
Rasti 2011 m. spalio 10 d. 8:00 ketvirčio pabaigą.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
