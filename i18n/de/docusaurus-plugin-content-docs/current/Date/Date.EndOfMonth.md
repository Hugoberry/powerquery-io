---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

Gibt das Ende des Monats zurück.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

Gibt das Ende des Monats, das <code>dateTime</code> enthält, zurück.      <ul>        <li><code>dateTime</code>: Ein <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert, auf dessen Grundlage das Ende des Monats berechnet wird.</li>      </ul>


## Examples

### Example #1 
Ruft das Ende des Monats für den 14.05.2011 ab.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Ruft das Ende des Monats für den 17.05.2011, 17:00:00 Uhr (-7:00) ab.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
