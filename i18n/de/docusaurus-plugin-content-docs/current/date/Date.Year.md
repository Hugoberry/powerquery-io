---
title: Date.Year
---

# Date.Year


Gibt die Jahreskomponente zurück.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Gibt die Jahreskomponente des angegebenen <code>datetime</code>-Werts "<code>dateTime</code>" zurück.


## Examples

### Example #1 
Ermittelt das Jahr in &#34;#datetime(2011, 12, 31, 9, 15, 36)&#34;.
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
