---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


Retourne la date et l&#39;heure actuelles dans le fuseau horaire local. Cette valeur est fixe et ne change pas lors des appels successifs.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

Retourne une valeur <code>datetime</code> définie selon la date et l'heure actuelles du système. La valeur retournée contient les informations de fuseau horaire qui représentent le fuseau horaire local. Cette valeur est fixe et ne change pas lors des appels successifs, contrairement à DateTimeZone.LocalNow, qui peut retourner des valeurs différentes au cours de l'exécution d'une expression.



## Category
DateTimeZone
