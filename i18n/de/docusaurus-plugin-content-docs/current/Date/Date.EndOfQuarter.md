---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Gibt das Ende des Quartals zurück.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Gibt das Ende des Quartals, das <code>dateTime</code> enthält, zurück. Zeitzoneninformationen werden beibehalten.      <ul>      <li><code>dateTime</code>: Ein <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>- Wert, auf dessen Grundlage das Quartalsende berechnet wird.</li>      </ul>


## Examples

### Example #1 
Suchen Sie das Quartalsende für den 10. Oktober 2011, 8:00 Uhr.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
