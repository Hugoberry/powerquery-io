---
title: DateTime.Date
---

# DateTime.Date


Retourne le composant de date de la valeur date, datetime ou datetimezone spécifiée.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Retourne le composant de date de <code>dateTime</code>, la valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> spécifiée.


## Examples

### Example #1 
Recherche la valeur de date de #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
