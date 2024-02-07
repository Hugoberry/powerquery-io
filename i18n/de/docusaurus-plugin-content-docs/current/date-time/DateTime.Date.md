---
title: DateTime.Date
---

# DateTime.Date


Gibt die Datumskomponente des angegebenen date-, datetime- oder datetimezone-Werts zurück.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Gibt die Datumskomponente von "<code>dateTime</code>" (der angegebene <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert) zurück.


## Examples

### Example #1 
Ermittelt den Datumswert von &#34;#datetime(2010, 12, 31, 11, 56, 02)&#34;.
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
