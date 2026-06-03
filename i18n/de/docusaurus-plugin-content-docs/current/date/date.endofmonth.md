---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Gibt das Ende des Monats zurück.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

Gibt das Ende des Monats, das `dateTime` enthält, zurück.

-   `dateTime`: Ein Wert für `date`, `datetime` oder `datetimezone`, ab dem das Monatsende berechnet wird.


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
