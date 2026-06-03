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

Retourne le composant date du paramètre `dateTime` si le paramètre est une valeur `date`, `datetime` ou `datetimezone`, ou `null` si le paramètre est `null`.


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
