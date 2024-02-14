---
title: DateTime.Time
---

# DateTime.Time


Retourne l&#39;heure qui fait partie de la valeur datetime spécifiée.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Remarks

Retourne l'heure qui fait partie de la valeur datetime spécifiée, <code>dateTime</code>.


## Examples

### Example #1 
Recherche la valeur d&#39;heure de #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
