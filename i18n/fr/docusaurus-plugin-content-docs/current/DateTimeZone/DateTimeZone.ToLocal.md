---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Convertit le composant de fuseau horaire dans le fuseau horaire local.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Modifie les informations de fuseau de la valeur datetimezone <code>dateTimeZone</code> en informations de fuseau horaire local.    Si <code>dateTimeZone</code> n'a pas de composant de fuseau horaire, les informations de fuseau horaire sont ajoutées.


## Examples

### Example #1 
Modifiez les informations de fuseau horaire pour #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) dans le fuseau horaire local (en supposant PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
