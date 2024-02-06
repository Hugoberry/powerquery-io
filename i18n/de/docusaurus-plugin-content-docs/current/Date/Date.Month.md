---
title: Date.Month
---

# Date.Month


Gibt die Monatskomponente zurück.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Gibt die Monatskomponente des angegebenen <code>datetime</code>-Werts "<code>dateTime</code>" zurück.


## Examples

### Example #1 
Ermittelt den Monat in &#34;#datetime(2011, 12, 31, 9, 15, 36)&#34;.
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
